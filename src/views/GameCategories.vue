<template>
  <div class="home wrapper">
     <Sidebar>
       <template v-slot:content>
         <h4 class="page-title my-5">Explore Games by Category / Tag</h4>
         <ul class="category-list d-flex flex-wrap align-items-center">
           <li v-for="category in categories" :key="category" class="category-item">
              <router-link :to="'/games/category/'+category">
                {{ category }}
              </router-link>
           </li>
         </ul>
       </template>
     </Sidebar>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';

export default {
  components: { Sidebar },
  name: 'ExploreGames',
  data() {
    return {
      categories: [
        'mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports',
        'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 
        'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 
        'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 
        'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 
        'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'
      ]
    }
  },
  methods: {
  },
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

.category-list {
  list-style: none;
  padding: 0;
  column-gap: 4rem;
  row-gap: 2rem;
}

.category-item {
  width: 210px;
  padding: 0.3rem 0;
  border: 1px solid #D1D1D1;
  text-align: center;
  transition: all 0.35s ease;
  cursor: pointer;
}

.category-item a {
  text-decoration: none;
  color: #D1D1D1;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.category-item:hover {
  background: #FFF;
}

.category-item:hover a {
  color: #121212;
}

@media screen and (max-width: 768px) {
  .game-list {
    width: 100%;
  }
  .game-wrapper {
    width: 100% !important;
  }
  .category-list {
    column-gap: 1rem;
    row-gap: 2rem;
  }
  .category-item {
    width: 47%;
  }
}
</style>
