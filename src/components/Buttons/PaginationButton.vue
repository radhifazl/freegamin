<template>
  <div class="pagination-wrapper">
      <button class="btn-pagination prev" @click="$emit('onPrev')" :disabled="disabledPrev">
        Prev
      </button>
      <slot/>
      <button class="btn-pagination next" @click="$emit('onNext')" :disabled="disabledNext">
        Next
      </button>
  </div>
</template>

<script>
export default {
    name: 'PaginationButton',
    props: [
        'disabledPrev',
        'disabledNext',
    ]
}
</script>

<style>
.pagination-wrapper {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.btn-pagination {
    padding: 0.3rem 1.5rem;
    border: none;
    outline: none;
    background: linear-gradient(90deg, rgba(62,91,251,1) 0%, rgba(88,174,247,1) 100%);
    color: var(--white);
    border-radius: 3px;
}

.btn-pagination:disabled {
    background: #888;
    color: var(--white);
    cursor: not-allowed;
}
</style>