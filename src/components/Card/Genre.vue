<template>
  <div class="genrecard">
      <span>
          {{ genre }}
      </span>
  </div>
</template>

<script>
export default {
    name: 'GenreCard',
    props: [
        'genre'
    ]
}
</script>

<style>
.genrecard {
    width: fit-content;
    padding: 0.1rem 1rem;
    background: #4d4d4d;
    display: flex;
}
</style>