<template>
  <div class="gamecard-btn">
      <button class="details-btn" @click="$emit('clickDetail')">
          Details
      </button>
  </div>
</template>

<script>
export default {
    name: 'GamecardButton',
}
</script>

<style>
.details-btn {
    padding: 0.3rem 2rem;
    border: none;
    outline: none;
    background: rgb(62,91,251);
    background: linear-gradient(90deg, rgba(62,91,251,1) 0%, rgba(88,174,247,1) 100%);
    color: var(--white);
    border-radius: 3px;
    transition: transform 0.35s ease-in-out;
}

.details-btn:hover {
    transform: translateY(-1px);
}

@media screen and (max-width: 768px) {
    .gamecard-btn {
       width: 100%;
    }
}
</style>