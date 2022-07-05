<template>
    <div class="game-title">
        <h4 class="text-white">
            {{ gameTitle }}
        </h4>
    </div>
</template>

<script>
export default {
    name: 'GameTitle',
    props: [
        'gameTitle'
    ]
}
</script>

<style>
@media screen and (min-width: 992px) {
    .game-title h4 {
        font-size: 2rem;
    }
}
</style>