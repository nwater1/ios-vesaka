<template>
  <button
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  methods: {
    clicked () {
      this.$emit('action-button-clicked')
    }
  }

}
</script>

<style scoped>

button {

  color: #06122B;
  width: 230px;
  border: 4px solid var(--button-border-color, var(--primary-color));
  font-weight: bold;
  font-size: 18px;
  background-image: linear-gradient(#F6CD01, #CB9F00);
  border-radius: 9999px;
  padding: 12px 24px;
  transition: 0.25s ease-in-out all;
}

button:hover {
  color: var(--button-hover-text-color, var(--on-primary-color));
  background-color: var(--button-hover-background-color, var(--primary-color));
}

button:focus {
  outline: none;
}
</style>
