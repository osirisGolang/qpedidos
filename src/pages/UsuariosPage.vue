<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="USUARIOS"
      :rows="rows"
      :columns="columns"
      row-key="name"
      dark
      color="amber"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: "NOMBRE DE USUARIO",
    align: "left",
    label: "NOMBRE DE USUARIO",
    field: "nombre",
    sortable: true,
  },
  {
    name: "NOMBRE DE USUARIO",
    align: "left",
    label: "CORREO ELECTRONICO",
    field: "correo",
    sortable: true,
  },
  {
    name: "NOMBRE DE USUARIO",
    align: "left",
    label: "ROL DEL USUARIO",
    field: "rol",
    sortable: true,
  },
];

const rows = [
  {
    nombre: "Carlos Fuentes",
    correo: "carlosf@empresa.com",
    rol: "Vendedor",
  },
  {
    nombre: "Fernando Perez",
    correo: "fernando@empresa.com",
    rol: "Administrador",
  },
  {
    nombre: "Armando Mendoza",
    correo: "armando@algo.com",
    rol: "Vendedor",
  },
  {
    nombre: "Jesus Gonzales",
    correo: "jjpwer@gmail.com",
    rol: "Vendedor",
  },
  {
    nombre: "Fabian Torres",
    correo: "Admin@xxxx.com",
    rol: "Adminstrador",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
