<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Carga de Pedidos por Vendedor</q-toolbar-title>
        <q-btn flat round icon="assignment_ind" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section>Carlos Ezequiel Zamora Pedraza</q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="left-navigation text-white"
      style="
        background-color:rgb(51,110,250;
        color: white;
        "
      side="left"
      elevated
    >
      <q-list>
        <q-item-label header style="color: white">
          Lista de Opciones
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Pedidos",
    caption: "Solicitud del Pedido",
    icon: "list_alt",
    link: "namePedidosVendor",
  },
  {
    title: "Clientes",
    caption: "Lista de Clientes",
    icon: "group",
    link: "nameClientes",
  },
  {
    title: "Articulos",
    caption: "Lista de Articulos",
    icon: "category",
    link: "nameArticulos",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
