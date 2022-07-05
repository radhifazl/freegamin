<template>
  <button class="btn-toTop" @click="$emit('action')">
      <i class='bx-fw bx bx-arrow-to-top'></i>
  </button>
</template>

<script>
export default {
    name: 'BacktotopButton',
}
</script>

<style>
.btn-toTop {
    position: fixed;
    bottom: 2%;
    right: 2.5%;
    z-index: 1000;
    background: linear-gradient(90deg, rgba(62,91,251,1) 0%, rgba(88,174,247,1) 100%);
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 3px;
    transform: translateY(-25px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}

.btn-toTop.scrolled {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.btn-toTop:hover {
    transform: translateY(-5px);
    background: linear-gradient(90deg, rgba(27,62,252,1) 0%, rgba(77,172,252,1) 100%);
}

.btn-toTop i {
    font-size: 1.5rem;
    color: var(--white);
}
</style>