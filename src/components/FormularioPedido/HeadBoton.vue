<!-- src/components/SubmitButton.vue -->
<template>
  <q-btn
    @click="handleClick"
    :label="label"
    color="primary"
    unelevated
  />
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    label: {
      type: String,
      default: 'Submit'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
