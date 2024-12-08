<template>
  <q-page class="col">
    <h3>Pinia Page</h3>
    <div>Current Count: {{ counter.count }}</div>
    <div class="q-pa-md row">
      <q-btn
        @click="counter.increment"
        color="primary"
        label="Incrementa el contador"
        no-caps
      />
    </div>
    <div class="q-pa-md row">
      <q-btn
        @click="aumentar"
        color="primary"
        label="Aumenta el contador"
        no-caps
      />
    </div>

    <div class="q-pa-md row">
      <q-btn
        @click="revertir(cadena)"
        color="secondary"
        label="Revierte el dato"
      />
    </div>
    <div class="q-pa-md row">
      <q-btn @click="sumador" color="secondary" label="El sumador" />
    </div>
    <div>
      <p>El sumador: {{ sumando }}</p>
    </div>
    <div>
      <p @click="padre">
        Texto a hacer click
        <q-btn label="Este es un hijo" @click.stop="hijo"></q-btn>
      </p>
    </div>
    <div>
      <q-input @keyup.page-down="presionokd" label="Presiona page-down">
      </q-input>
    </div>
  </q-page>
</template>

<script setup>
import { useCounterStore } from "stores/example-store";
import { ref } from "vue";
const counter = useCounterStore();
console.log("VEr el log");
const sumando = ref(0);
const cadena = ref("Soy una cadena");
//counter.count++;
// with autocompletion ✨
//counter.$patch({ count: counter.count + 1 });
// or using an action instead
//counter.increment();//
function aumentar(event) {
  console.log(event);
  console.log("Valor del contador: ", counter.count);
  counter.count++;
  console.log("Tipo de dato Event: ", event.type);
  console.log("Objeto counter: ", counter);
}

function revertir(cad) {
  alert("REvierte el dato");
  console.log(cad.split("").reverse().join(""));
}
function sumador() {
  sumando.value++;
}
function padre() {
  console.log("Soy el padre");
}
function hijo() {
  alert("soy el hijo");
}
function presionokd() {
  alert("Presione kd");
}
</script>
