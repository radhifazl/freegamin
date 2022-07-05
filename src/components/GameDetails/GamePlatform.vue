<template>
    <div class="info-wrapper platform mb-2  d-flex align-items-center justify-content-between">
       <h6 class="info-title text-white">
           Platform
       </h6>  
       <h6>
         {{ platform }}
       </h6>
    </div>
</template>

<script>
export default {
    name: 'GamePlatform',
    props: [
        'platform'
    ]
}
</script>

<style>

</style>