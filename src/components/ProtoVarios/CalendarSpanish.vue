<template>
  <div class="q-pa-md">
    <q-date v-model="model" :locale="myLocale" color="secondary">
      <q-btn
        square
        color="secondary"
        icon="event"
        @click="procesa(model)"
        v-close-popup
      >
        <q-tooltip class="bg-red-5">
          Oprime el boton para seleccionar la fecha.
        </q-tooltip>
      </q-btn>
    </q-date>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { date } from "quasar";
const newDate = new Date();

const emitir = defineEmits(["cambiaEmision"]);

//const model = ref(date.formatDate(new Date(), "YYYY-MM-DD"));
const model = ref("2024/05/15");

const props = defineProps({
  fecha_enviada: String,
});

// can supply only what needed (the rest will be taken from current locale):
const myLocale = {
  /* starting with Sunday */
  days: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
  daysShort: "Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
  monthsShort: "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
  firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
  format24h: true,
  pluralDay: "dias",
};

function procesa(model) {
  const cambiaModel =
    model.substr(8, 2) + "/" + model.substr(5, 2) + "/" + model.substr(0, 4);
  emitir("cambiaEmision", cambiaModel);
}

function iniciaFecha() {
  model.value =
    props.fecha_enviada.substr(6, 4) +
    "/" +
    props.fecha_enviada.substr(3, 2) +
    "/" +
    props.fecha_enviada.substr(0, 2);
}

onMounted(() => {
  iniciaFecha();
  console.log(`the component is now mounted.`);
});
</script>
