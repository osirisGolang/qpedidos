<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/cicloVida.png"
      style="width: auto; height: 600px"
    />
    <div>
      <h5>Ciclo de vida</h5>
      <q-btn to="/">Ir al inicio</q-btn>
      <q-btn @click="tareas.push('New Job')">Agregar Tareas</q-btn>
      {{ tareas }}
    </div>
    <div>
      <q-btn-toggle
        name="genre"
        v-model="genre"
        push
        glossy
        toggle-color="teal"
        :options="[
          { label: 'Rock', value: 'rock' },
          { label: 'Funk', value: 'funk' },
          { label: 'Pop', value: 'pop' },
        ]"
      />
    </div>
    <div>
      <button id="count" @click="count++">{{ count }}</button>
    </div>
    <div>
      <div class="q-pa-md">
        <q-btn-toggle
          v-model="ok"
          toggle-color="primary"
          :options="[
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
          ]"
        />
      </div>

      <h1 v-if="ok">Sí</h1>
    </div>
    <div v-if="Math.random() > 0.5">Ahora me ves</div>
  </q-page>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
const tareas = ref([]);
const genre = ref(null);
const submitted = ref(false);
const submitEmpty = ref(false);
const submitResult = ref([]);
const count = ref(0);
const ok = ref(true);

onMounted(() => {
  console.log("Se ha montado el componente ** onMounted **");
});

onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log("Se ha  ** onUptated **");
});

onUnmounted(() => {
  console.log("Se ha Des-montado el componente ** onUnmounted **");
});
</script>
