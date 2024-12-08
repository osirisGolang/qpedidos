<template>
  <q-page class="row">
    <div v-for="(item, key) in articulos" :key="key">
      <ArticuloTarjeta
        :copa="item.copa"
        :imagen="item.imagen"
        :gas="item.gas"
        :cinta="item.cinta"
      />
    </div>
    <div>
      <q-btn label="Nuevo" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ArticuloTarjeta from "components/ArticuloTarjeta.vue";

const articulos = ref([
  {
    copa: "71061",
    gas: "SENSOR AVEO LANOS",
    cinta: "Sensor para Aveo modelos 2005",
    imagen: "src/assets/sensor2.jpg",
  },
  {
    copa: "3029",
    gas: "SENSOR INDICADOR TABLERO",
    cinta: "CORSA AVEO OPTRA",
    imagen: "src/assets/sensor3.jpg",
  },
  {
    copa: "3119",
    gas: "SENSOR TEMPERATURA TABLERO",
    cinta: "LUV-DMAX",
    imagen: "src/assets/sensor4.jpg",
  },
  {
    copa: "4022",
    gas: "SENSOR DEL REFRIGERANTE",
    cinta: "SPARK",
    imagen: "src/assets/sensor5.PNG",
  },
  {
    copa: "4040",
    gas: "SENSOR TEMPERATURA",
    cinta: "LUV DMAX SILVERADO",
    imagen: "src/assets/sensor6.png",
  },
  {
    copa: "71061",
    gas: "SENSOR AVEO LANOS",
    cinta: "Sensor para Aveo modelos 2005",
    imagen: "src/assets/sensor2.jpg",
  },
  {
    copa: "3119",
    gas: "SENSOR TEMPERATURA TABLERO",
    cinta: "LUV-DMAX",
    imagen: "src/assets/sensor4.jpg",
  },
  {
    copa: "4022",
    gas: "SENSOR DEL REFRIGERANTE",
    cinta: "SPARK",
    imagen: "src/assets/sensor5.PNG",
  },
  {
    copa: "4040",
    gas: "SENSOR TEMPERATURA",
    cinta: "LUV DMAX SILVERADO",
    imagen: "src/assets/sensor6.png",
  },
  {
    copa: "71061",
    gas: "SENSOR AVEO LANOS",
    cinta: "Sensor para Aveo modelos 2005",
    imagen: "src/assets/sensor2.jpg",
  },
]);
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
