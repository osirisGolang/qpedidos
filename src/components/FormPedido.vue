<template>
  <q-form>
    <head-numero
      v-model="formData.username"
      :label="ellabel"
      name="username"
      hind="oculto"
    />
    <head-numero
      v-model="formData.email"
      label="Email"
      name="email"
      type="email"
      hind=""
    />
    <head-emision
      v-model="lafecha"
      label="Email"
      name="email"
      type="email"
      hind=""
    />
    <q-input
      v-model="numped"
      label="Numero de Pedido"
      hind="Coloque el numero"
    />
    <q-input
      v-model="numped2"
      label="Numero de Pedido"
      name="email"
      hind="Coloque el numero"
    />
  </q-form>
</template>

<script setup>
import HeadNumero from "./FormularioPedido/HeadNumero.vue";
import HeadEmision from "./FormularioPedido/HeadEmision.vue";
import ped from "src/services/ped";
import { ref } from "vue";

const email = ref(null);
const formData = ref({
  username: "Ejemplo",
  email: "",
});
const ellabel = ref("Micolta");
const lafecha = ref("2019/02/01");
const numped = ref(ped[0].nombre);
const numped2 = ref(ped[1].nombre);
</script>
