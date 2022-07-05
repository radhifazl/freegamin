<template>
  <div class="home wrapper d-flex align-items-center justify-content-center">
    <div class="home-content text-center">
      <div class="image-logo">
        <img src="@/assets/images/logo/logo.svg" alt="Freegamin Logo">
      </div>

      <div class="image-text mx-auto">
        <p class="mb-5">
          You can explore all the free to play games and find the one you like
        </p>
        <router-link to="/explore" class="explore-btn">
            Explore Games
        </router-link>
      </div>
    </div>
  </div>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
export default {
  components: { Footer },
}
</script>

<style>
.image-logo {
  width: 100%;
  height: 40vh;
}

.image-logo img {
  width: 100%;
  height: 100%;
}

.image-text {
  width: 80%;
  transform: translateY(-3rem);
}

.image-text p {
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 2rem;
}

.explore-btn {
  border: 2px solid #657bf8;
  color: #657bf8;
  padding: 0.7rem 2.5rem;
  border-radius: 3px;
  text-decoration: none;
}

.explore-btn:hover {
  color: #FFF;
  background: rgb(62,91,251);
  background: linear-gradient(90deg, rgba(62,91,251,1) 0%, rgba(88,174,247,1) 100%);
}
</style>