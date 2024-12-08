<!-- src/components/CustomInput.vue -->
<template>
  
 <div>
  <q-input
   label="Fecha de emision"
  v-model="otrodia"
  mask="##/##/####"
  outlined
 >
   <template v-slot:append>
     <q-icon name="event" class="cursor-pointer">
       <q-popup-proxy cover transition-show="scale" transition-hide="scale">
         <q-date v-model="otrodia" mask="DD/MM/YYYY" minimal>
           <div class="row items-start justify-end">
             <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
           </q-date>
          </q-popup-proxy>
         </q-icon>
        </template>
       </q-input>
 </div>
 

</template>

<script setup>
import { ref } from 'vue'
import { date } from 'quasar'

 defineProps({
   
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
   
  })

  const inputValue = ref('2019/03/01')
  const date1 = ref('2024/06/24')
  let mostrar = ref(false)
  const date2 = date.extractDate('21/03/1985', 'DD/MM/YYYY')
  const date3 = ref(date2)
  const timeStamp = Date.now()
  const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
  const formato2 = date.formatDate(timeStamp, 'DD-MM-YYYY')
  const now = new Date()
  const otrodia = ref('')


  function esconder() {
       mostrar.value =!mostrar.value
  }
  
  function resuelve() {
    const a = "2024/04/21"
    return a
  }

</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
