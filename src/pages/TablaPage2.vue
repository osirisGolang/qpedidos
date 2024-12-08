<template>
  <q-page>
    <q-card>
      <q-table
        class="my-sticky-header-column-table"
        title="Tabla 2"
        :rows="data"
        :hide-header="mode === 'grid'"
        :columns="columns"
        row-key="name"
        :grid="mode == 'grid'"
        :filter="filter"
        flat
        bordered
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

        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-chip
              :color="
                props.row.status == 'Active'
                  ? 'green'
                  : props.row.status == 'Inactive'
                  ? 'red'
                  : 'grey'
              "
              text-color="white"
              dense
              class="text-weight-bolder"
              square
              style="width: 85px"
              >{{ props.row.status }}
            </q-chip>
          </q-td>
        </template>

        <template v-slot:body-cell-adicional="props">
          <q-td :props="props">
            <q-chip
              color="blue"
              text-color="white"
              dense
              class="text-weight-bolder"
              square
              style="width: 85px"
              >{{ props.row.invoice_id }}
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

    <q-btn label="Alert" color="primary" @click="alert = true" />

    <!--  -->
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const invoice_dialog = ref(false);
const alert = ref(false);
const columns = [
  {
    name: "invoice_id",
    align: "left",
    label: "#",
    field: "invoice_id",
    sortable: true,
  },
  {
    name: "account",
    required: true,
    label: "Account",
    align: "left",
    field: "account",
    sortable: true,
  },
  {
    name: "amount",
    align: "left",
    label: "Amount",
    field: "amount",
    sortable: true,
  },
  {
    name: "invoice_date",
    align: "left",
    label: "Invoice Date",
    field: "invoice_date",
    sortable: true,
  },
  {
    name: "due_date",
    align: "left",
    label: "Due Date",
    field: "due_date",
    sortable: true,
  },
  {
    name: "invoice_type",
    align: "left",
    label: "Invoice Type",
    field: "invoice_type",
    sortable: true,
  },
  {
    name: "status",
    align: "left",
    label: "Status",
    field: "status",
    sortable: true,
  },
  {
    name: "adicional",
    align: "left",
    label: "otramas",
    field: "invoice_type",
    sortable: true,
  },
];

const data = [
  {
    invoice_id: "INV 002",
    account: "Kiley Ibbotson",
    amount: "$ 1900",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "09-02-2019",
    due_date: "10-02-2019",
  },
  {
    invoice_id: "INV 003",
    account: "Leslie Tecklenburg",
    amount: "$ 1200",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "03-25-2019",
    due_date: "04-25-2019",
  },
  {
    invoice_id: "INV 004",
    account: "Lia Whitledge",
    amount: "$ 1550",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "03-18-2019",
    due_date: "04-18-2019",
  },
  {
    invoice_id: "INV 005",
    account: "Sam Wileman",
    amount: "$ 1800",
    invoice_type: "Onetime",
    status: "Inactive",
    invoice_date: "04-09-2019",
    due_date: "05-09-2019",
  },
  {
    invoice_id: "INV 006",
    account: "Edgar Colmer",
    amount: "$ 1000",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "09-03-2019",
    due_date: "10-03-2019",
  },
  {
    invoice_id: "INV 007",
    account: "Kaiden Rozelle",
    amount: "$ 1200",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "01-12-2019",
    due_date: "02-12-2019",
  },
  {
    invoice_id: "INV 008",
    account: "Leslie Stopher",
    amount: "$ 1500",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "04-15-2019",
    due_date: "05-15-2019",
  },
  {
    invoice_id: "INV 009",
    account: "Miguel Subasic",
    amount: "$ 2000",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "11-09-2019",
    due_date: "12-09-2019",
  },
  {
    invoice_id: "INV 010",
    account: "Reese Vandygriff",
    amount: "$ 1450",
    invoice_type: "Onetime",
    status: "Inactive",
    invoice_date: "01-01-2019",
    due_date: "02-01-2019",
  },
  {
    invoice_id: "INV 011",
    account: "Griffin Troglen",
    amount: "$ 1200",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "04-12-2019",
    due_date: "06-12-2019",
  },
  {
    invoice_id: "INV 012",
    account: "Zachary Wehrley",
    amount: "$ 1400",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "10-09-2019",
    due_date: "11-09-2019",
  },
  {
    invoice_id: "INV 013",
    account: "Kyle Wahlert",
    amount: "$ 1200",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "01-02-2019",
    due_date: "02-02-2019",
  },
  {
    invoice_id: "INV 014",
    account: "John Subasic",
    amount: "$ 1234",
    invoice_type: "Onetime",
    status: "Active",
    invoice_date: "07-06-2019",
    due_date: "08-06-2019",
  },
];
</script>

<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  height: 410px

  /* specifying max-width so the example can
   highlight the sticky column on any browser window */
  max-width: 800px

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #00b4ff

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #00b4ff

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>