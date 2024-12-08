<template>
  <q-page class="column">
   <div class="col col-12 rectangle bg-oto">
    <div class="col col-12 rectangle bg-medio">
      <h3>ENCABEZADO</h3>
    </div>
    <div class="col col-12 q-pt-md">
   
    </div>
    <div class="col col-12 rectangle bg-largo">
      
      <RangoDetalles/>
    </div>

   </div>
  </q-page>
</template>

<script setup>
import RangoDetalles from "./DetallePedidos.vue";
defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss">
.rectangle {
  
  margin: 20px;
  border: 3px solid;
}

.bg-oto {
  background-color: #af899c; // Color primario de Quasar
  border-radius: 15px; /* Redondear esquinas */
}

.bg-medio {
  background-color: #616aca; // Color primario de Quasar
}

.bg-largo {
  background-color: #3e7b43; // Color primario de Quasar
  height: 400px;
  border-radius: 15px; /* Redondear esquinas */
}
</style>