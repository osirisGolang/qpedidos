<template>
  <q-page class="flex ">
    <h1 class="text-center mt-5 text-info">Login</h1>
    <form
    class="row"
   
    >
    <div class="col-md-6 offset-md-3">
      <input
        type="text"
        class="form-control mb-2"
        placeholder="Ingrese Email"
        v-model="email"
      />
    </div>
    <div class="col-md-6 offset-md-3">
      <input
        type="text"
        class="form-control mb-2"
        placeholder="Ingrese Password"
        v-model="password"
      />
    </div>
    <div class="col-md-6 offset-md-3">
      <button
        class="btn btn-info me-2"
        type="submit"
        
      >
        Acceder
      </button>
      
    </div>
    </form>

  </q-page>
</template>

<script setup>

</script>
