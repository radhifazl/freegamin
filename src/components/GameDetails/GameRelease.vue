<template>
    <div class="info-wrapper release-date mb-2  d-flex align-items-center justify-content-between">
        <h6 class="info-title text-white">
            Release Date
        </h6>  
        <h6>
          {{ date }}
        </h6>
    </div>
</template>

<script>
export default {
    name: 'GameRelease',
    props: [
        'date'
    ]
}
</script>

<style>

</style>