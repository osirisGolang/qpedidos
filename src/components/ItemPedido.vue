<template>
  <div class="q-pa row items-start q-gutter-md">
    <q-input
      filled
      v-model="buscaCodigo"
      label="CODIGO A BUSCAR"
      @focus="codigoEnfoque"
      prefix="🌏"
      style="width: 350px"
    />
    <q-select
      filled
      v-model="buscaNombre"
      label="NOMBRE DEL ARTICULO A BUSCAR"
      use-input
      hide-selected
      :options="optrupob"
      option-value="name"
      option-label="name"
      @filter="filterNombre"
      @focus="nombreEnfoque"
      input-debounce="0"
      hint="Introduzca el codigo"
      fill-input
      suffix="💻"
      style="width: 500px"
    />
  </div>
  <q-separator class="q-pt-xs" size="5px" />

  <div class="q-pa row items-start q-gutter-md">
    <q-input
      filled
      v-model="codigo"
      label="CODIGO"
      readonly
      style="width: 350px"
    />
    <q-input
      filled
      v-model="nombre"
      label="NOMBRE DEL ARTICULO"
      readonly
      style="width: 500px"
    />
    <q-input
      filled
      v-model="cantidad"
      label="CANTIDAD"
      prefix="🌏"
      style="width: 200px"
    />
    <q-btn label="Insertar" color="primary" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const buscaCodigo = defineModel("buscaCodigo");
const buscaNombre = defineModel("buscaNombre");

const codigo = defineModel("codigo");
const nombre = defineModel("nombre");
const cantidad = defineModel("cantidad");

const grupob = [
  { cod: "2025", name: "Nombre_2025" },
  {
    cod: "202530",
    name: "Nombre_202530 prudvto de nombre largov extremedamente ful chola lorem  asdf afas asf asdfasf asf asfa",
  },
  { cod: "8524", name: "Nombre_8524" },
  { cod: "9877", name: "Nombre_9877" },
  { cod: "3578", name: "Nombre_3578" },
];
const optrupob = ref(grupob);

function filterNombre(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    optrupob.value = grupob.filter(
      (v) => v.name.toLowerCase().indexOf(needle) > -1
    );
  });
}

watch(buscaCodigo, async (newQuestion, oldQuestion) => {
  const objb = grupob.find(({ cod }) => cod == buscaCodigo.value);
  console.log("objb: ", objb);
  if (objb != undefined) {
    codigo.value = objb.cod;
    nombre.value = objb.name;
  } else {
    codigo.value = "";
    nombre.value = "";
  }
});

watch(buscaNombre, async (newQuestion, oldQuestion) => {
  nombre.value = buscaNombre.value.name;
  codigo.value = buscaNombre.value.cod;
});

function codigoEnfoque() {
  buscaNombre.value = "";
}

function nombreEnfoque() {
  buscaCodigo.value = "";
}

//let pequeños = gente.filter(persona => persona.edad <= 3)
//const modelTotal = defineModel("modelTotal", { type: Number, default: 0 });
</script>
<style scoped>
.q-field {
  font-size: 18px; /* Cambia el tamaño según lo necesites */
}
</style>

