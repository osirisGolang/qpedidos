<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="CLIENTES"
      :rows="rows"
      :columns="columns"
      row-key="name"
      color="amber"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Buscar..."
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const filter = ref("");
const columns = [
  {
    name: "uno",
    align: "left",
    label: "CODIGO",
    field: "CODCLI",
    sortable: true,
  },
  {
    name: "dos",
    align: "left",
    label: "NOMBRE",
    field: "NOMCLI",
    sortable: true,
  },
  {
    name: "tres",
    align: "left",
    label: "RIF",
    field: "CIF",
    sortable: true,
  },
  {
    name: "CUATRO",
    align: "left",
    label: "TELEFONO",
    field: "TLF1",
    sortable: true,
  },
  {
    name: "cinco",
    align: "left",
    label: "VENDEDOR",
    field: "VENDEDOR",
    sortable: true,
  },
];

const rows = [
  {
    CODCLI: "V216274330",
    NOMCLI: "JAIRO GOMEZ -VENEIMPORT JG",
    CIF: "V216274330",
    TLF1: "0414 3714187",
    VENDEDOR: "00045",
  },
  {
    CODCLI: "V188781396",
    NOMCLI: "MARLON ALEJANDRO RODRIGUEZ CORDERO -AUTO MOTORES LA CONCORDI",
    CIF: "V-18878139-6",
    TLF1: "",
    VENDEDOR: "",
  },
  {
    CODCLI: "V93590003",
    NOMCLI: "CESAR SOTO-MOTORAUTO PARTS",
    CIF: "V093590003",
    TLF1: "",
    VENDEDOR: "",
  },
  {
    CODCLI: "296872015",
    NOMCLI: "REPUESTOS Y ACCESORIOS SPORTING CAR, C.A.",
    CIF: "J296872015",
    TLF1: "",
    VENDEDOR: "",
  },
  {
    CODCLI: "J402497490",
    NOMCLI: "A.J. AUTOREPUESTOS F-7000, C.A.",
    CIF: "J402497490",
    TLF1: "",
    VENDEDOR: "",
  },
  {
    CODCLI: "V17930583",
    NOMCLI: "ADONAY CARDOZA",
    CIF: "V-17930583",
    TLF1: "",
    VENDEDOR: "",
  },
  {
    CODCLI: "V19043676",
    NOMCLI: "ALEJANDRO JOSE FERNANDEZ LEAL",
    CIF: "V19043676",
    TLF1: "",
    VENDEDOR: "",
  },
];
</script>
