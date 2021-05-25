<template>
  <input
    placeholder="จังหวัด / Country"
    type="text"
    :value="value"
    @input="$emit('update', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'AppProvinve',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: ['value']

}
</script>

<style scoped>
input[type="text"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  text-align: center;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #000;
  color: #a0d18c;
  width: 80%;
  height: 40px;
  padding: 12px 24px;
  background:  #FFF;
}

input[type="text"]:focus {
  outline: none;
  border: 1px solid #a0d18c;
  color: #000;
}
</style>
