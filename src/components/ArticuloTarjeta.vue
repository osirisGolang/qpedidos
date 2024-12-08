<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div>
      <q-card class="my-card" flat bordered>
        <img :src="props.imagen" />

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="source" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ props.copa }}</q-item-label>
              <q-item-label caption></q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="description" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ props.gas }}</q-item-label>
              <q-item-label caption></q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="expand" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ props.cinta }}</q-item-label>
              <q-item-label caption></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>

    <q-separator />
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  copa: String,
  gas: String,
  cinta: String,
  imagen: String,
});

function pasaimagen() {
  console.log("props.imagen", props.imagen);
  return "~assets/sensor2.jpg";
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
