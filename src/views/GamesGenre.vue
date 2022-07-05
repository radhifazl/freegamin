<template>
  <div class="home wrapper">
     <Sidebar>
       <template v-slot:category>
         <div class="route-link router-link-exact-active">
            <li class="route-item">
              <i class='bx-fw bx bxs-chevron-right'></i> {{ category }}
            </li>
         </div>
       </template>
       <template v-slot:content>
         <div id="scrollable"></div>
         <BackToTopButton @action="toTop" id="back-to-top"/>
         <div id="searchForm" class="w-100 mt-5">
           <input 
             type="text" 
             name="search" 
             id="search" 
             placeholder="Search a game" 
             class="form-control bg-dark text-white" autocomplete="off"
             v-model="search" @keyup="searchGame"
           >
         </div>
         <p class="my-4">Page {{ currentPage }}</p>
         <p v-if="isNotFound">Game not found</p>
         <div class="game-list d-flex flex-wrap">
            <div v-for="(game, i) in filteredGames" :key="game.id" class="game-wrapper text-white mb-3">
              <GameCard 
                :src="game.thumbnail" 
                :title="game.title" 
                :shortDesc="game.short_description"
                :genreType="game.genre"
                :id="i" 
                :gmId="game.id" 
                :gmName="game.title"
                @route="getDetails"
                />
            </div>
         </div>

         <PaginationButton :disabledPrev="isFirstPage" :disabledNext="isLastPage" @onPrev="prev" @onNext="next">
           <div class="current-page">
              <span>{{ currentPage }}</span>
           </div>
         </PaginationButton>
         <div class="items-info mt-3">
          <p class="text-center">
            Showing {{ showItemsPerPage }} of {{ games.length }} games
          </p>
         </div>
       </template>
     </Sidebar>
  </div>
</template>

<script>
//import axios
import axios from 'axios';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import GameCard from '@/components/Card/GameCard.vue';
import PaginationButton from '@/components/Buttons/PaginationButton.vue';
import BackToTopButton from '@/components/Buttons/BackToTopButton.vue';

export default {
  components: { Sidebar, GameCard, PaginationButton, BackToTopButton },
  name: 'ExploreGames',
  data() {
    return {
      games: [],
      filteredGames: [],
      currentPage: 1,
      pageSize: 51,
      isFirstPage: false,
      isLastPage: false,
      lastPageLength: 0,
      search: '',
      isNotFound: false,
      category: ''
    }
  },
  methods: {
    async changePage(page) {
      await this.getGames();
      if(page < 1) {
        page = 1;
      }
      
      this.currentPage == 1 ? this.isFirstPage = true : this.isFirstPage = false;
      this.currentPage == this.numPages() ? this.isLastPage = true : this.isLastPage = false;
      
      if(page > this.numPages()) {
        page = this.numPages();
      }

      this.filteredGames = []
      for(var i = (page-1) * this.pageSize; i < (page * this.pageSize) && i < this.games.length; i++) {
        this.filteredGames.push(this.games[i]);
      }
    },
    numPages() {
      return Math.ceil(this.games.length / this.pageSize);
    },
    async getGames() {
      const API_KEY = 'f9662c7bf3mshcd57c9f12d27a9dp1d6dfejsn78f63d161a7a'
      const API_HOST = 'free-to-play-games-database.p.rapidapi.com'
      await axios.get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          'sort-by': '',
          category: this.$route.params.genre
        },
      }).then(async response => {
          this.games = await response.data
      })
      .catch(error => {
        console.log(error)
      })
    },
    prev() {
      if(this.currentPage > 1) {
        this.currentPage--
        this.changePage(this.currentPage)
        if(window.matchMedia("(max-width: 768px)").matches) {
          window.scroll({top: 0, behavior: 'smooth'})
        } else if(window.matchMedia("(min-width: 768px)").matches) {
          document.getElementById('scrollable').scrollIntoView({behavior: 'smooth'})
        }
      }
    },
    next() {
      if(this.currentPage < this.numPages()) {
        this.currentPage++
        this.changePage(this.currentPage)
        if(window.matchMedia("(max-width: 768px)").matches) {
          window.scroll({top: 0, behavior: 'smooth'})
        } else if(window.matchMedia("(min-width: 768px)").matches) {
          document.getElementById('scrollable').scrollIntoView({behavior: 'smooth'})
        }
      }
    },
    getDetails(game) {
      let gameName = game.gameName;
      let splittedGameName = gameName.toLowerCase().split(' ').join('-');
      this.$router.push({
        name: 'GameDetails',
        params: {
          id: game.gameId,
          name: splittedGameName,
        }
      })
    },
    searchGame() {
      this.filteredGames = this.games.filter(game => {
        return game.title.toLowerCase().includes(this.search.toLowerCase())
      })

      if(!this.filteredGames.length) {
        this.isNotFound = true;
      } else {
        this.isNotFound = false;
      }
      if(this.search === 'game porno') {
        this.isNotFound = false
        const gamePorno = 'Genshin Impact'
        this.filteredGames = this.games.filter(game => {
          return game.title.toLowerCase().includes(gamePorno.toLowerCase())
        })
      }
    },
    toTop() {
      window.scroll({top: 0, behavior: 'smooth'})
    }
  },
  mounted() {
    const cat = this.$route.params.genre.slice(1)
    const categoryName = this.$route.params.genre.charAt(0).toUpperCase()
    this.category = categoryName + cat
    this.getGames();
    this.changePage(1);
    const toTopBtn = document.getElementById('back-to-top')

    if(window.matchMedia("(max-width: 768px)").matches) {
      window.addEventListener('scroll', () => {
        toTopBtn.classList.toggle('scrolled', window.scrollY > 10)
      })
    } else if(window.matchMedia("(min-width: 768px)").matches) {
      const content = document.querySelector('.content')
      content.addEventListener('scroll', () => {
        const scrolled = content.scrollTop
        if(scrolled > 10) {
          toTopBtn.classList.add('scrolled')
        } else {
          toTopBtn.classList.remove('scrolled')
        }
      })
    }
  },
  computed: {
    showItemsPerPage() {
      //count how many items per page
      let itemsPerPage = this.filteredGames.length;
      let sum = 0;
      let dividedSum = 1
      for(var i = 0; i < this.currentPage; i++) {
        sum += itemsPerPage;
      }
      switch(sum) {
        case 51:
          dividedSum = 0;
          break
        case 102:
          dividedSum = 52;
          break
        case 153:
          dividedSum = 103;
          break
        case 204:
          dividedSum = 154;
          break
        case 255:
          dividedSum = 205;
          break
        case 306:
          dividedSum = 256;
          break
        case 357:
          dividedSum = 307;
          break
        default:
          dividedSum = 0;
          break
      }
      return `${dividedSum} - ${sum}`;
    },
  }
}

</script>

<style>
.game-list {
  list-style: none;
  padding: 0;
  gap: 1rem;
  align-items: center;
}

.game-wrapper {
  width: 335px;
  height: 500px;
}


@media screen and (max-width: 768px) {
  .game-list {
    width: 100%;
  }
  .game-wrapper {
    width: 100% !important;
  }
}
</style>
