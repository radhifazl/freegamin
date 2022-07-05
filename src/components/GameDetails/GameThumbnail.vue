<template>
    <div class="game-thumbnail mb-3">
        <img :src="thumbnail" :alt="altTitle">
    </div>
</template>

<script>
export default {
    name: 'GameThumbnail',
    props: {
        thumbnail: {
            type: String,
            required: true,
        },
        altTitle: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>
.game-thumbnail {
    width: 100%;
}

.game-thumbnail img {
    width: 100%;
}

@media screen and (min-width: 992px) {
    .game-thumbnail {
        width: 30%;
    }
}
</style>