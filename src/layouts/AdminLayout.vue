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

        <q-toolbar-title> Seguimiento de Pedidos (ORDER TRACK)</q-toolbar-title>
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
    title: "Home",
    caption: "Seguimiento Integral de Pedidos y Pagos",
    icon: "home",
    link: "nameHomePage",
  },
  {
    title: "Usuarios",
    caption: "layout del Pedido",
    icon: "record_voice_over",
    link: "nameUsuarios",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
