<template>
  <div class="my-card">
    <div class="q-pl-md row">
      <div class="q-pl-md col-md-4">
        <q-select
          outlined
          class="q-pt-sm"
          v-model="buscaCodigo"
          label="Codigo del Producto"
          use-input
          hide-selected
          :options="optrupob"
          option-value="cod"
          option-label="cod"
          @filter="filterCodigo"
          input-debounce="0"
          fill-input
          suffix="💻"
          @update:model-value="cambiaNombreProducto"
          dense
        />
      </div>
      <div class="q-px-md col-md-6">
        <q-select
          outlined
          class="q-pt-sm"
          v-model="nombreProducto"
          label="Nombre del Producto"
          use-input
          hide-selected
          :options="optnames"
          option-value="name"
          option-label="name"
          @filter="filterNombre"
          input-debounce="0"
          fill-input
          suffix="💻"
          @update:model-value="cambiaCodProducto"
          dense
        />
      </div>
      <div class="q-pl-sm col-md-2">
        <q-input
          outlined
          v-model="cantidadProducto"
          label="Cantidad"
          class="q-pt-sm"
          dense
          type="number"
        >
          <template v-slot:append>
            <q-icon>
              <img src="~assets/filew.svg" alt="Custom Icon" />
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-pt-md q-ml-md col-3">
        <q-btn
          push
          color="primary"
          label="Incluir Registro"
          @click="addRenglon"
        />
      </div>
    </div>

    <!-- tabla de registros -->
    <div class="q-pa-md q-ml-md">
      <q-card class="no-shadow" bordered style="width: 72vw">
        <q-card-section>
          <div class="text-h6 text-grey-8">Lineas del Pedido</div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="q-pa-none">
          <q-table :rows="data" :columns="columns" class="no-shadow">
            <template v-slot:body-cell-codigo="props">
              <q-td :props="props">
                <q-item style="max-width: 420px">
                  <q-item-section>
                    <q-item-label>{{ props.row.codigo }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>
            <template v-slot:body-cell-cantidad="props">
              <q-td :props="props">
                <q-item style="max-width: 420px">
                  <q-item-section>
                    <q-item-label>{{ props.row.cantidad }}</q-item-label>
                    <q-popup-edit v-model="props.row.cantidad" v-slot="scope">
                      <q-input
                        v-model="scope.value"
                        dense
                        autofocus
                        counter
                        @keyup.enter="scope.set"
                      />
                    </q-popup-edit>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>
            <template v-slot:body-cell-Action="props">
              <q-td :props="props">
                <q-btn
                  icon="delete"
                  size="sm"
                  class="q-ml-sm"
                  flat
                  dense
                  @click="deleteItem(props.row)"
                />
              </q-td>
            </template>
          </q-table>
        </q-card-section>
        <q-btn
          icon="star"
          label="Agregar Pedido"
          size="sm"
          class="q-ml-sm"
          flat
          dense
          @click="addPedido"
          v-close-popup
        />
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { date } from "quasar";
import CalendarSpanish from "components/ProtoVarios/CalendarSpanish.vue";
import { usePedidoStore } from "stores/pedido-store";

const pedido = usePedidoStore();
const buscaCodigo = defineModel("buscaCodigo");
const elCodigo = defineModel("elCodigo");
const nombreProducto = defineModel("nombreProducto");
const cantidadProducto = defineModel("cantidadProducto");
let codigo = "";
let nombre = "";
const grupob = [
  { cod: "2025", name: "Nombre_2025" },
  {
    cod: "202530",
    name: "Nombre_202530 prudvto de nombre largov extremedamente ful chola lorem  asdf afas asf asdfasf asf asfa",
  },
  { cod: "8524", name: "Articulo Nombre_8524" },
  { cod: "9877", name: "Articulo Nombre_9877" },
  { cod: "3578", name: "Articulo Nombre_3578" },
  { cod: "2659", name: "Articulo Nombre_2659" },
  { cod: "8574", name: "Articulo Nombre_8574" },
  { cod: "5847", name: "Articulo Nombre_5847" },
  { cod: "9658", name: "Articulo Nombre_9658" },
  { cod: "5968", name: "Articulo Nombre_5968" },
  { cod: "3568", name: "Articulo Nombre_2659" },
  { cod: "6724", name: "Articulo Nombre_6724" },
  { cod: "7945", name: "Articulo Nombre_7945" },
  { cod: "9674", name: "Articulo Nombre_9674" },
  { cod: "3975", name: "Articulo Nombre_3975" },
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

function addPedido() {
  pedido.pedidos.push({
    Numped: "PE000012",
    Emision: "06/01/2024",
    Cliente: "J000312230",
    Nomcli: "Armando Tarazona",
    Codven: "00034",
    Comen1: "Comentario xyz",
    Comen2: "Segundo comentario",
    Estatus: "PE",
    Entrega: "06/01/2024",
  });
}

function cambiaNombreProducto(codProductoObj) {
  nombreProducto.value = codProductoObj.name;
}

function cambiaCodProducto(ProductoObj) {
  buscaCodigo.value = ProductoObj.cod;
}

function addRenglon() {
  if (buscaCodigo.value?.["cod"] !== undefined) {
    codigo = buscaCodigo.value.cod;
  } else {
    codigo = buscaCodigo.value;
  }

  if (nombreProducto.value?.["name"] !== undefined) {
    nombre = nombreProducto.value.name;
  } else {
    nombre = nombreProducto.value;
  }

  data.value.push({
    codigo: codigo,
    cantidad: cantidadProducto.value,
    nombreProducto: nombre,
  });

  limpiaDatos();
}

function limpiaDatos() {
  buscaCodigo.value = "";
  nombreProducto.value = "";
  cantidadProducto.value = "";
}

function deleteItem(item) {
  const index = data.value.indexOf(item);
  confirm("Are you sure you want to delete this item?") &&
    data.value.splice(index, 1);
}

//Tabla
const data = ref([]);

const columns = [
  {
    name: "codigo",
    label: "codigo",
    field: "codigo",
    sortable: true,
    align: "left",
  },
  {
    name: "nombreProducto",
    label: "Nombre del Producto",
    field: "nombreProducto",
    sortable: true,
    align: "left",
  },
  {
    name: "cantidad",
    label: "cantidad",
    field: "cantidad",
    sortable: true,
    align: "left",
  },
  {
    name: "Action",
    label: "",
    field: "Action",
    sortable: false,
    align: "center",
  },
];
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>

