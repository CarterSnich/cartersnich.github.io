<script setup lang="ts">
const props = defineProps<{
  title?: string;
  isOpen: boolean;
}>()
</script>

<template>
  <div class="modal" v-if="props.isOpen">
    <div class="modal-dialog">
      <div class="modal-head">
        <h2>{{ props.title }}</h2>
        <button type="button" @click="$emit('onClickClose')">&times;</button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</template>


<style scoped>
.modal {
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;

  color: inherit;
  background-color: rgba(0, 0, 0, 50%);
  border: none;

  display: grid;
  place-content: center;

  z-index: 1;
}

.modal-dialog {
  background: var(--background);
  min-width: 300px;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--border);
}

.modal-head {
  display: flex;
  align-items: center;
  padding: 1rem;

  h2 {
    margin: 0;
    flex-grow: 1;
  }

  button {
    color: var(--text);
    font-size: 20px;
    background-color: transparent;
    border: none;
    height: 24px;
    width: 24px;
    display: grid;
    place-content: center;
    padding: 1rem;
  }
}

.modal-body {
  flex-grow: 1;
  color: var(--text);
  overflow: auto;
  padding: 1rem;

  pre {
    margin: 0;
  }
}
</style>