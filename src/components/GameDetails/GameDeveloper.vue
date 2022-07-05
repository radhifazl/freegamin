<template>
    <div class="info-wrapper developer mb-2 d-flex align-items-center justify-content-between">
        <h6 class="info-title text-white">
            Developer
        </h6>
        <h6>
          {{ dev }}
        </h6>
    </div>
</template>

<script>
export default {
    name: 'GameDeveloper',
    props: [
        'dev'
    ]
}
</script>

<style>
</style>