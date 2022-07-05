<template>
  <div class="gamecard">
    <div class="gamecard-thumbnail">
      <img :src="src" :alt="title" class="w-100">
    </div>

    <div class="gamecard-text p-3">
      <div class="gametitle-wrapper mb-3">
        <h4 class="game-title">{{ title }}</h4>
      </div>

      <div class="shortdesc-wrapper">
        <p class="short-description">
          {{ shortDesc }}
        </p>
      </div>
    </div>

    <div class="gamecard-footer d-flex justify-content-between align-items-center p-3">
      <GamecardButton @clickDetail="sendEmit"/>
        <div class="gamecard-genre">
          <span>
            {{ genreType }}
          </span>
        </div>
    </div>
  </div>
</template>

<script>
import GamecardButton from '../Buttons/GamecardButton.vue'
export default {
  components: { GamecardButton },
    name: 'GameCard',
    props: {
        src: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        shortDesc: {
            type: String,
            required: true,
        },
        genreType: {
            type: String,
            required: true,
        },
        gmId: {
            type: Number,
            required: true
        },
        gmName: {
            type: String,
            required: true
        }
    },
    methods: {
        sendEmit() {
            this.$emit('route', {
                gameId: this.gmId,
                gameName: this.gmName
            })
        },
    }
}
</script>

<style>
.gamecard {
  width: 100%;
  height: 500px;
  position: relative;
  background: #75757560;
  border-radius: 3px;
}

.gamecard-thumbnail {
  width: 100%;
}

.gametitle-wrapper {
  height: 70px;
  border-bottom: 1px solid #D1D1D1;
}

.gamecard-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.gamecard-genre {
  padding: 0.2rem 1rem;
  border: 2px solid #D1D1D1;
    border-radius: 3px;
  transition: 0.25s ease-in-out;
}

.genreRoute {
  text-decoration: none;
}

.genreRoute:hover > .gamecard-genre {
  background: #383838;
}
</style>