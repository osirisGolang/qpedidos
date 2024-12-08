<template>
  <q-page class="col">
    <h3>Store Page</h3>
    <div>Current Count: {{ counter.count }}</div>
    <div class="q-pa-md row"></div>
  </q-page>
</template>

<script setup>
import { useCounterStore } from "stores/example-store";
const counter = useCounterStore();
</script>
