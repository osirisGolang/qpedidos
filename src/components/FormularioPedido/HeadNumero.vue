<!-- src/components/CustomInput.vue -->
<template>
  <q-input
    v-model="inputValue"
    :label="label"
    :type="type"
    :name="name"
    :hint="hind"
    outlined
  />
</template>

<script setup>
import { ref } from 'vue'

 defineProps({
   
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    hind:{
      type: String,
      default: 'text'
    }
  })

  const inputValue = ref('algo')

</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
