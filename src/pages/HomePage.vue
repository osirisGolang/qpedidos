<template>
  <q-page >
    <div class="container">
      <div class="cabeza">
        <span>J.L. THOMSON VENEZUELA C.A</span>
      </div>
      <div class="carru">
        <carousel-home/>
      </div>
      <div class="carru">
        <carousel-four/>
      </div>
      
  

    </div>
   
  </q-page>
</template>

<script setup>
import CarouselHome from "components/CarouselHome.vue";
import CarouselFour from "components/CarouselFour.vue";

defineOptions({
  name: 'HomePage'
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.container
  width: 95%
  margin-left: 2%
  margin-top: 2%
  background: linear-gradient(70deg, blue, Aqua)
  padding: 0 20px 20px 20px

.cabeza
  width: 100% 
  color: white
  font-size: 40px
  text-align: center
  font-family: Lato
  
.carru
  width: 100% 
  color: white
  text-align: center
</style>