<template>
    <div class="info-wrapper publisher mb-2  d-flex align-items-center justify-content-between">
        <h6 class="info-title text-white">
            Publisher
        </h6>

        <h6>
          {{ pub }}
        </h6>
    </div>
</template>

<script>
export default {
    name: 'GamePublisher',
    props: [
        'pub'
    ]
}
</script>

<style>

</style>