<template>
  <div class="q-pa-md">
    <div class="q-pa-md row q-gutter-md">
    <q-card class="my-card">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="400px"
          class="bg-primary text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
         
          <q-img 
            src="~assets/sensor3.jpg"
            style="height: 140px; max-width: 150px" 
          />
          <div class="q-mt-md text-center">
            SENSOR TPS 3 PINES FIESTA ECOSPORT
          </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-img 
            src="~assets/sensor4.jpg"
            style="height: 140px; max-width: 150px" 
          />
          <div class="q-mt-md text-center">
            SENSOR ARBOL DE LEVA FIESTA MAX 3 PINES 67-9S6G12K073AA
          </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-img 
            src="~assets/sensor5.png"
            style="height: 140px; max-width: 150px" 
          />
            <div class="q-mt-md text-center">
              Sensor Detonación Gran Vitara Chevrolet
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-img 
            src="~assets/sensor6.png"
            style="height: 140px; max-width: 150px" 
          />
            <div class="q-mt-md text-center">
              Sensor Oxigeno Fiat Palio Siena 1.8
            </div>
          </q-carousel-slide>
        </q-carousel>

      </div>
    </q-card>
  </div>
  </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  
</style>
