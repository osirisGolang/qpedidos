<template>
  <div class="q-pl-md row">
    <div class="q-pl-md col-md-4">
      <q-select
        outlined
        class="q-pt-sm"
        v-model="buscaCodigo"
        label="Cod cliente"
        use-input
        hide-selected
        :options="optrupob"
        option-value="cod"
        option-label="cod"
        @filter="filterCodigo"
        input-debounce="0"
        fill-input
        suffix="💻"
        @update:model-value="cambiaNombreCliente"
        dense
      />
    </div>

    <div class="q-px-md col-md-8">
      <q-select
        outlined
        class="q-pt-sm"
        v-model="nombreCliente"
        label="Nombre del cliente"
        use-input
        hide-selected
        :options="optnames"
        option-value="name"
        option-label="name"
        @filter="filterNombre"
        input-debounce="0"
        fill-input
        suffix="💻"
        @update:model-value="cambiaCodCliente"
        dense
      />
    </div>
  </div>
  <!-- segunda Linea del Encabezado -->
  <div class="q-pl-md row">
    <div class="q-pl-md col-md-3">
      <q-input
        dense
        outlined
        v-model="emision"
        Mask="DD/MM/YYYY"
        label="Fecha de emision"
        class="q-pt-sm"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="invoiceDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <CalendarSpanish
                :fecha_enviada="emision"
                @cambiaEmision="cambiaEmision"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="q-pl-md col-md-3">
      <q-input
        dense
        outlined
        v-model="entrega"
        Mask="DD/MM/YYYY"
        label="Fecha de entrega"
        class="q-pt-sm"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="invoiceDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <CalendarSpanish
                :fecha_enviada="entrega"
                @cambiaEmision="cambiaEntrega"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="q-pl-md col-3">
      <q-input outlined v-model="dato1" label="Vendedor" class="q-pt-sm" dense>
        <template v-slot:append>
          <q-icon>
            <img src="~assets/filew.svg" alt="Custom Icon" />
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="q-pl-md col-3">
      <q-input
        outlined
        v-model="tarifa"
        label="Tarifa"
        class="q-pt-sm q-pr-md"
        dense
      >
        <template v-slot:append>
          <q-icon name="monetization_on" />
        </template>
      </q-input>
    </div>
  </div>

  <div class="q-ml-md">
    <hr class="q-mx-md q-ml-md" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { date } from "quasar";
import CalendarSpanish from "components/ProtoVarios/CalendarSpanish.vue";
import { usePedidoStore } from "stores/pedido-store";

const buscaCodigo = defineModel("buscaCodigo");
const nombreCliente = defineModel("nombreCliente");
const emision = ref(date.formatDate(new Date(), "DD/MM/YYYY"));
const entrega = ref(date.formatDate(new Date(), "DD/MM/YYYY"));
const tarifa = ref("");
const pedido = usePedidoStore();

onMounted(() => {
  console.log(`the component is now mounted.`);
  pedido.pedidos.Emision = emision.value;
});

//const emision = ref("15/04/2019");
const dato1 = defineModel("dato1");
const grupob = [
  { cod: "2025", name: "Nombre_2025" },
  {
    cod: "202530",
    name: "Nombre_202530 prudvto de nombre largov extremedamente ful chola lorem  asdf afas asf asdfasf asf asfa",
  },
  { cod: "8524", name: "Nombre_8524" },
  { cod: "9877", name: "Nombre_9877" },
  { cod: "3578", name: "Nombre_3578" },
  { cod: "2659", name: "Nombre_2659" },
  { cod: "8574", name: "Nombre_8574" },
  { cod: "5847", name: "Nombre_5847" },
  { cod: "9658", name: "Nombre_9658" },
  { cod: "5968", name: "Nombre_5968" },
  { cod: "3568", name: "Nombre_2659" },
  { cod: "6724", name: "Nombre_6724" },
  { cod: "7945", name: "Nombre_7945" },
  { cod: "9674", name: "Nombre_9674" },
  { cod: "3975", name: "Nombre_3975" },
];
const optrupob = ref(grupob);
const optnames = ref(grupob);

function filterCodigo(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    optrupob.value = grupob.filter(
      (v) => v.cod.toLowerCase().indexOf(needle) > -1
    );
  });
}

function filterNombre(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    optnames.value = grupob.filter(
      (v) => v.name.toLowerCase().indexOf(needle) > -1
    );
  });
}

function nombreEnfoque() {
  buscaCodigo.value = "";
}

function cambiaNombreCliente(codClienteObj) {
  nombreCliente.value = codClienteObj.name;
}

function cambiaCodCliente(ClienteObj) {
  buscaCodigo.value = ClienteObj.cod;
}

function cambiaEmision(cFecha) {
  emision.value = cFecha;
}

function cambiaEntrega(cFecha) {
  entrega.value = cFecha;
}

//utilizo los watch para cargar al storage los datos del encabezado
watch(buscaCodigo, () => {
  if (typeof buscaCodigo.value == "object") {
    pedido.pedidos.Cliente = buscaCodigo.value.cod;
  } else {
    pedido.pedidos.Cliente = buscaCodigo.value;
  }
});
//nombreCliente
watch(nombreCliente, () => {
  if (typeof nombreCliente.value == "object") {
    pedido.pedidos.Nomcli = nombreCliente.value.cod;
  } else {
    pedido.pedidos.Nomcli = nombreCliente.value;
  }
});
// La fecah de emision
watch(emision, () => {
  pedido.pedidos.Emision = emision.value;
  console.log("Emision: ", pedido.pedidos.Emision);
});
</script>

