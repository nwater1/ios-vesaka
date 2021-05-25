<template>
  <button
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButtonShare',
  methods: {
    clicked () {
      this.$emit('action-button-clicked')
    }
  }

}
</script>

<style scoped>

button {

  color: #fff;
  width: 180px;
  border: 4px solid var(--button-border-color, var(--primary-color));
  font-weight: bold;
  font-size: 16px;
  background:  #3E61AB;
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
