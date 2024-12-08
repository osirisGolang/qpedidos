<template>
  <q-page class="flex flex-center">
    <!-- <div>
      <q-btn label="Nuevo" color="secondary" @click="prender = true" />
    </div> -->
    <div>
      <q-avatar class="shadow-5">
        <img src="src/assets/sensor3.jpg" alt="" />
      </q-avatar>
    </div>
    <div style="width: 850">
      <q-card>
        <q-card-section class="q-pt-none">
          <ItemPedido />
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="dialodetalle">
      <q-card style="max-width: 850px">
        <q-card-section class="q-pt-none">
          <ItemPedido />
        </q-card-section>
      </q-card>
    </q-dialog>
    <div>
      <q-btn label="Incluye" color="secondary" @click="dialodetalle = true" />
    </div>
    <!-- <div>
      <q-dialog v-model="prender" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar
              icon="signal_wifi_off"
              color="primary"
              text-color="white"
            />
            <span class="q-ml-sm"
              >You are currently not connected to any network.</span
            >
          </q-card-section>
          <LinePedido :numero="line.numero" />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Modificar" color="primary" @click="modilinea" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div> -->
  </q-page>
</template>

<script setup>
import { ref, nextTick, computed } from "vue";
import LinePedido from "components/LinePedido.vue";
import ItemPedido from "components/ItemPedido.vue";
const prender = ref(false);
const algo = ref("Jorge");
const dialodetalle = ref(false);
const line = ref({
  numero: "25000",
  emision: "",
  nomcli: "",
  total: "",
});
</script>
