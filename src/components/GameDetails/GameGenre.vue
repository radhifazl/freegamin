<template>
  <div class="info-wrapper genre mb-4">
        <h6 class="info-title text-white mb-4">
            Genre
        </h6>  
        <Genre :genre="genreType"/>
  </div>
</template>

<script>
import Genre from '@/components/Card/Genre.vue';
export default {
    name: 'GameGenres',
    components: { Genre },
    props: [
        'genreType'
    ]
}
</script>

<style>
@media screen and (min-width: 992px) {
    .genre {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
}
</style>