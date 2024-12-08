<template>
  <q-page>
    <q-card>
      <div class="q-pa-sm">
        <q-btn class="glossy" rounded color="blue-6" label="Nuevo Pedido" />
      </div>

      <q-table
        class="my-sticky-dynamic"
        title="PEDIDOS DE LOS CLIENTES B"
        :rows="data"
        :columns="columns"
        row-key="name"
        flat
        bordered
        :loading="loading"
        virtual-scroll
        :virtual-scroll-item-size="48"
        :virtual-scroll-sticky-size-start="48"
        :rows-per-page-options="[0]"
        @virtual-scroll="onScroll"
        @row-dblclick="onRowClick"
      >
        <template>
          <q-btn
            @click="invoice_dialog = true"
            outline
            color="primary"
            label="Insertar New"
            class="q-mr-xs"
          >
            <q-tooltip v-close-popup>Soy el boton de nuevo </q-tooltip>
          </q-btn>

          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-btn flat round dense>
            <q-tooltip v-close-popup>Este mensaje del popup </q-tooltip>
          </q-btn>

          <q-btn
            color="primary"
            icon-right="archive"
            label="Export to csv"
            no-caps
          />
        </template>

        <template v-slot:body-cell-invoice_id="props">
          <q-td :props="props">
            <q-chip
              color="green"
              text-color="white"
              dense
              class="text-weight-bolder"
              square
              style="width: 85px"
              clickable
              @click="onNumero(props.row, props.rowIndex)"
              >{{ props.row.pedido_id }}
            </q-chip>
          </q-td>
        </template>
      </q-table>
    </q-card>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Algo -->
    <q-dialog v-model="dialodetalle" persistent>
      <q-card class="my-card">
        <q-card-section class="q-pt-none q-pl-none q-pr-none">
          <q-bar dark class="bg-primary text-white">
            <div>Inclusión de los renglones del pedido</div>
            <q-space></q-space>
            <q-btn flat icon="close" round size="8.5px" v-close-popup />
          </q-bar>
          <div>DAtsoi de el encabezado</div>
        </q-card-section>
        <q-card-section>
          <FormPedido />
          <ItemPedido />
          <TablePage2 />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-btn label="Alert" color="primary" @click="alert = true" />
    <div>
      <q-btn label="Nuevo" color="secondary" @click="prender = true" />
    </div>
    <div>
      <q-btn label="Incluye" color="secondary" @click="dialodetalle = true" />
    </div>
    <div>
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
          <LinePedido
            :pedido_id="line.pedido_id"
            :numped="line.numped"
            :emision="line.emision"
            :codcli="line.codcli"
            :nomcli="line.nomcli"
            :correovdd="line.correovdd"
            :comentario1="line.comentario1"
            @additem="additem"
          />

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <p>{{ line.numped }}</p>
    <!--  -->
  </q-page>
</template>

<script setup>
import { ref, nextTick, computed } from "vue";
import LinePedido from "components/LinePedido.vue";
import ItemPedido from "components/ItemPedido.vue";
import FormPedido from "components/FormPedido.vue";
import TablePage2 from "pages/TablaPage2.vue";

const invoice_dialog = ref(false);
const alert = ref(false);
const prender = ref(false);
const dialodetalle = ref(false);
const numlinea = ref(0);
const loading = false;
const nextPage = 0;
const lastPage = 1;
const line = ref({
  pedido_id: "",
  numped: "",
  emision: "",
  codcli: "",
  nomcli: "",
  correovdd: "",
  comentario1: "",
});
const columns = [
  {
    name: "id",
    align: "left",
    label: "ID",
    field: "pedido_id",
    sortable: true,
  },
  {
    name: "Numero de Pedido",
    align: "left",
    label: "TOTAL",
    field: "numped",
    sortable: true,
  },
  {
    name: "Fecha de Emision",
    align: "left",
    label: "EMISION",
    field: "emision",
    sortable: true,
  },
  {
    name: "Cliente",
    align: "left",
    label: "CODIGO CLIENTE",
    field: "codcli",
    sortable: true,
  },
  {
    name: "Nombre del Cliente",
    align: "left",
    label: "NOMBRE DEL CLIENTE",
    field: "nomcli",
    sortable: true,
  },
  {
    name: "Correo del Vendedor",
    align: "left",
    label: "CORREO DEL VENDEDOR",
    field: "correovdd",
    sortable: true,
  },
  {
    name: "Comentario1",
    align: "left",
    label: "COMENTARIO1",
    field: "comentario1",
    sortable: true,
  },
];

const data = ref([
  {
    pedido_id: "121",
    numped: "PED0031",
    emision: "05/08/2024",
    codcli: "00000008",
    nomcli: "Juan Perez",
    correovdd: "jperez@empresa.com",
    comentario1: "Este es un comentario",
  },
  {
    pedido_id: "122",
    numped: "PED0032",
    emision: "06/08/2024",
    codcli: "00000009",
    nomcli: "Carlos Suarez",
    correovdd: "carlos@empresa.com",
    comentario1: "Este es un comentario",
  },
  {
    pedido_id: "123",
    numped: "PED0033",
    emision: "07/08/2024",
    codcli: "00000008",
    nomcli: "Juan Perez",
    correovdd: "jperez@empresa.com",
    comentario1: "Este es un comentario",
  },
  {
    pedido_id: "124",
    numped: "PED0034",
    emision: "05/08/2024",
    codcli: "00000025",
    nomcli: "Guillermo Tell",
    correovdd: "guillo@empresa.com",
    comentario1: "Este es un comentario",
  },
  {
    pedido_id: "125",
    numped: "PED0035",
    emision: "15/08/2024",
    codcli: "00000325",
    nomcli: "Fernando Gonzales",
    correovdd: "fernandog@empresa.com",
    comentario1: "Este es un comentario",
  },
]);

const linea = ref({
  pedido_id: "188",
  numped: "PED0088",
  emision: "15/08/2024",
  codcli: "00000388",
  nomcli: "Gustavo Ochoa",
  correovdd: "ochoocho@empresa.com",
  comentario1: "Este es un comentario",
});

function onRowClick(evt, row, index) {
  line.value.numero = row.pedido_id;
  line.value.emision = row.emisionf;
  line.value.nomcli = row.cliente;
  line.value.total = row.totalp;
  numlinea.value = index;
  prender.value = true;
}

function onNumero(row, index) {
  line.value.numero = row.pedido_id;
  line.value.emision = row.emisionf;
  line.value.nomcli = row.cliente;
  line.value.total = row.totalp;
  numlinea.value = index;
  prender.value = true;
}

function modilinea(
  pedido_id,
  numped,
  emision,
  codcli,
  nomcli,
  correovdd,
  comentario1
) {
  data[numlinea.value].pedido_id = numero;
  data[numlinea.value].emisionf = emision;
  data[numlinea.value].cliente = nomcli;
  data[numlinea.value].totalp = total;
  prender.value = false;
}

function veralgo() {
  console.log("Promio veralgo");
}

function additem(
  pedido_id,
  numped,
  emision,
  codcli,
  nomcli,
  correovdd,
  comentario1
) {
  let obj = {
    pedido_id: pedido_id,
    numped: numped,
    emision: emision,
    codcli: codcli,
    nomcli: nomcli,
    correovdd: correovdd,
    comentario1: comentario1,
  };
  data.value.push(obj);
  console.log("data:", data);
  prender.value = false;
}

function onScroll({ to, ref }) {
  const lastIndex = data.value.length - 1;

  if (loading.value !== true && nextPage.value < lastPage && to === lastIndex) {
    loading.value = true;

    setTimeout(() => {
      nextPage.value++;
      nextTick(() => {
        ref.refresh();
        loading.value = false;
      });
    }, 500);
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 65vW
  max-width: 70vW

.my-sticky-dynamic
  /* height or max-height is important */
  height: 610px
  width: 1200px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #00b4ff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
