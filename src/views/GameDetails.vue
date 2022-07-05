<template>
  <div class="game-detail wrapper">
      <Sidebar>
          <template v-slot:content>
              <div class="game-details w-100" v-for="game in games" :key="game.id">
                  <div class="gamedetails-header">
                    <GameThumbnail :thumbnail="game.thumbnail" :altTitle="game.title"/>

                    <GameTitle :gameTitle="game.title"/>
                  </div>

                  <div class="develop-publish">
                      <GameDeveloper :dev="game.developer"/>
                      <GamePublisher :pub="game.publisher"/>
                  </div>
                  
                  <GamePlatform :platform="game.platform"/>
                  
                  <GameRelease :date="game.release_date"/>

                  <GameGenre :genreType="game.genre"/>

                  <GameDescription :desc="game.description" :gameName="game.title"/>

                  <div class="sys-requirements mb-5 w-100" v-if="isPcGames">
                        <div class="desc-title w-100">
                            <div class="icon">
                                <i class='bx-fw bx bxs-chevron-right'></i>
                            </div>
    
                            <div class="text w-100">
                                <h5 class="text-white mb-4">
                                    System Requirements
                                </h5>
    
                                <div class="sys-wrapper w-100">
                                    <ul class="p-0">
                                        <li class="system-items"
                                          v-for="(requirements, system) in game.minimum_system_requirements" :key="system"
                                        >
                                            <div class="system">
                                                <div class="system-name">
                                                    <h5 id="system" style="color: #888;">{{ system }}</h5>
                                                    <h5>{{ requirements }}</h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                  </div>

                  <div class="screenshots">
                      <div class="screenshot-title d-flex align-items-start mb-2">
                          <div class="icon">
                              <i class='bx-fw bx bxs-chevron-right'></i>
                          </div>
      
                          <div class="text">
                              <h5 class="text-white mb-3">
                                  Screenshots
                              </h5>
                          </div>
                      </div>
                      <div class="screenshot-images">
                        <div class="img-wrapper" v-for="(screenshot, i) in game.screenshots" :key="screenshot.id">
                            <img :src="screenshot.image" :alt="'screenshot-'+i" class="w-100">
                        </div>
                      </div>
                  </div>
              </div>
          </template>
      </Sidebar>
  </div>
</template>

<script>
import axios from 'axios';

import Sidebar from '@/components/Sidebar/Sidebar.vue'
import GameThumbnail from '@/components/GameDetails/GameThumbnail.vue';
import GameTitle from '@/components/GameDetails/GameTitle.vue';
import GameDeveloper from '@/components/GameDetails/GameDeveloper.vue';
import GamePublisher from '@/components/GameDetails/GamePublisher.vue';
import GamePlatform from '@/components/GameDetails/GamePlatform.vue';
import GameRelease from '@/components/GameDetails/GameRelease.vue';
import GameGenre from '@/components/GameDetails/GameGenre.vue';
import GameDescription from '@/components/GameDetails/GameDescription.vue';

export default {
    name: 'GameDetails',
    components: { 
        Sidebar, GameThumbnail, GameTitle, GameDeveloper, GamePublisher, 
        GamePlatform, GameRelease, GameGenre,
        GameDescription 
    },
    data() {
        return {
            games: [],
            isPcGames: true,
        }
    },
    methods: {
        async getGameDetails() {
            const API_KEY = 'f9662c7bf3mshcd57c9f12d27a9dp1d6dfejsn78f63d161a7a'
            const API_HOST = 'free-to-play-games-database.p.rapidapi.com'
            await axios.get('/game', {
                baseURL: `https://${API_HOST}/api`,
                headers: {
                    'x-rapidapi-key': API_KEY,
                    'x-rapidapi-host': API_HOST,
                },
                params: {
                    id: this.$route.params.id,
                }
            })
            .then(response => {
                this.games.push(response.data);
                console.log(this.games)
                if(this.games[0].platform == 'Web Browser') {
                    this.isPcGames = false;
                }
            }).catch(err => {
                alert(err);
            })
        }
    },
    mounted() {
        this.getGameDetails();
    }
}
</script>

<style>
.game-details {
    padding-top: 1rem;
}

.gamedetails-header {
    border-bottom: 2px solid #D1D1D1;
    margin-bottom: 2rem;
}

.info-title {
    width: 40%;
    position: relative;
    z-index: 0;
}

.info-title::after {
    content: ':';
    position: absolute;
    right: 0;
    top: 0;
}

.icon {
    transform: translateY(2px);
}

.screenshot-images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.img-wrapper {
    width: 100%;
}
.sys-wrapper {
    width: 100%
}

.sys-wrapper ul {
    list-style: none;
}

@media screen and (min-width: 992px) {
    .gamedetails-header {
        display: flex;
        gap: 2rem;
    }

    .info-title {
        width: 20%;
    }

    .info-title, .info-title ~ h6 {
        font-size: 1.2rem;
    }

    .info-wrapper {
        justify-content: flex-start !important;
        gap: 3rem;
    }

    .screenshot-images {
        justify-content: space-between;
    }

    .img-wrapper {
        width: 32%;
    }

    .sys-wrapper ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
        width: 100%;
    }

    .system-items {
        width: 45%;
    }

    #system {
        text-transform: capitalize;
    }
}
</style>