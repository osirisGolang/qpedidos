<template>
  <q-form>
    <q-input filled v-model="modelPedido_id" label="ID" />
    <q-input filled v-model="modelNumped" label="NUMERO DE PEDIDO" />
    <q-input filled v-model="modelEmision" label="FECHA DE EMISION" />
    <q-input filled v-model="modelCodcli" label="CODIGO DE CLIENTE" />
    <q-input filled v-model="modelNomcli" label="NOMBRE DEL CLIENTE" />
    <q-input filled v-model="modelCorreovdd" label="CORREO DEL VENDEDOR" />
    <q-input filled v-model="modelComentario1" label="COMENTARIO" />
  </q-form>
  <p>props.pedido_id: {{ props.pedido_id }}</p>
  <q-btn
    @click="
      $emit(
        'additem',
        modelPedido_id,
        modelNumped,
        modelEmision,
        modelCodcli,
        modelNomcli,
        modelCorreovdd,
        modelComentario1
      )
    "
    color="primary"
    label="Cambiar datos de Linea"
  />
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  pedido_id: String,
  numped: String,
  emision: String,
  nomcli: String,
  codcli: String,
  correovdd: String,
  comentario1: String,
});

const modelPedido_id = defineModel("modelPedido_id");
const modelNumped = defineModel("modelNumped");
const modelEmision = defineModel("modelEmision");
const modelCodcli = defineModel("modelCodcli");
const modelNomcli = defineModel("modelNomcli");
const modelCorreovdd = defineModel("modelCorreovdd");
const modelComentario1 = defineModel("modelComentario1");

//const modelTotal = defineModel("modelTotal", { type: Number, default: 0 });

const emit = defineEmits(["additem", "delete"]);

modelPedido_id.value = props.pedido_id;
modelNumped.value = props.numped;
modelEmision.value = props.emision;
modelCodcli.value = props.codcli;
modelNomcli.value = props.nomcli;
modelCorreovdd.value = props.correovdd;
modelComentario1.value = props.comentario1;
</script>
