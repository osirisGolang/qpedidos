<template>
  <q-page>
    <div class="row">
      <div class="col bg-primary">1</div>
      <div class="col bg-secondary">1</div>
      <div class="col bg-accent">1</div>
      <!--
     we have 3 children, so equivalent
     to above would be to use `col-4`
     on each of the children
  -->
    </div>

    <div class="row text-center">
      <div class="col-3 bg-positive text-center">1</div>
      <div class="col-6 bg-info">2</div>
      <div class="col-3 bg-warning">1</div>
    </div>

    <q-separator />

    <div class="row">
      <div class="col-2 bg-positive">...</div>

      <!-- 2 + 6 < 12, so next element is placed on same line -->
      <div class="col-6 bg-info" style="order: 1">...Soy 2</div>

      <!-- 2 + 6 + 10 > 12, so next element wraps to next line -->
      <div class="col-10 bg-warning order-last">...</div>

      <!--
      10 + 3 > 12, so next element wraps to next line.
      Note that we take into consideration the current line only
      (with col-10 only, since it was wrapped to its own line).
    -->
      <div class="col-3 bg-primary order-first">...</div>
    </div>

    <q-separator></q-separator>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 bg-warning">col</div>
      <div class="col-xs-12 col-sm-6 col-md-4 bg-primary">col</div>
      <div class="col-xs-12 col-sm-6 col-md-4 bg-info">col</div>
    </div>

    <q-separator></q-separator>

    <div class="q-pa-md example-row-equal-width">
      <div class="row">
        <div class="col">.col</div>
        <div class="col">.col</div>
      </div>

      <div class="row">
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
      </div>

      <div class="row">
        <div class="col">
          <q-input v-model="text" label="Standard" />
        </div>
        <div class="col">
          <q-input>Algun dato</q-input>
        </div>
        <div class="col">C3</div>
        <div class="col">D4</div>
      </div>
    </div>

    <q-separator></q-separator>

    <div class="q-pa-md envolver">
      <div class="row">
        <div class="col">
          <q-input v-model="text" label="Standard" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Item" />
        </div>
        <div class="col-4">
          <q-input outlined v-model="text" label="Nombre" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
      </div>
    </div>

    <q-separator></q-separator>

    <div class="q-pa-md envolver">
      <div class="row">
        <div class="col">
          <q-input v-model="text" label="Standard" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Item" />
        </div>
        <div class="col-4">
          <q-input outlined v-model="text" label="Nombre" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
        <div class="col">
          <q-input outlined v-model="text" label="Cantidad" />
        </div>
      </div>
    </div>

    <q-separator></q-separator>

    <div class="column laIndigo" style="height: 450px">
      <div class="col">
        <q-input dark outlined v-model="text" label="Cantidad" />
      </div>
      <div class="col">
        <q-input outlined v-model="text" label="Cantidad" />
      </div>
      <div class="col">
        <q-input outlined v-model="text" label="Cantidad" />
      </div>
    </div>

    <q-separator></q-separator>
    <div>..</div>
    <div class="q-pa-md wrapper">
      <div class="cuadrito">One</div>
      <div class="cuadrito">Two</div>
      <div class="cuadrito">Three</div>
      <div class="cuadrito">Four</div>
      <div class="cuadrito">Five</div>
      <div class="cuadrito">Six</div>
      <div class="cuadrito">Seven</div>
      <div class="cuadrito">Eight</div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const x = 20;
const text = ref("");
</script>

<style lang="sass">
.example-row-equal-width
  .row > div
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 2px solid rgba(#999,.2)
  .row + .row
    margin-top: 1rem

.envolver
  background: cyan

.lalime
  background: lime

.laIndigo
  background: indigo
  color: bg-primary

.wrapper
  display: grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: auto
  background: brown
  border-color: black
  border: 2px solid #000
  margin-top: 1rem
  margin-bottom: 1rem
  height: 400px

.cuadrito
  border-color: black
  border: 1px solid #999
  text-align: center
</style>
