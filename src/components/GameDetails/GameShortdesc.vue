<template>
    <div class="game-shortdesc mb-4">
      <p>
          {{ shortDesc }}
      </p>
    </div>
</template>

<script>
export default {
    name: 'GameShortdesc',
    props: [
        'shortDesc'
    ]
}
</script>

<style>
@media screen and (min-width: 992px) {
    .game-shortdesc p {
        font-size: 1.2rem;
    }
}
</style>