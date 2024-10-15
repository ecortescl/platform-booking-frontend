<template>
  <div class="flex flex-col min-h-screen">
    <nav class="flex w-full bg-gray-800 p-4">
      <div class="bg-black-500 p-4 flex-1">Profesionales</div>
      <div class="bg-black-500 p-4 flex-1">Servicios</div>
      <div class="bg-black-500 p-4 flex-1">Sucursales y horarios</div>
      <div class="bg-black-500 p-4 flex-1">sobre nosotros</div>
      <div class="bg-black-500 p-4 flex-1">atencion al cliente</div>
    </nav>
    <div class="flex flex-col items-center justify-center flex-grow">
      <h1 class="text-7xl font-bold mb-8">
        Hello world! con tailwind
      </h1>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar
  },
}
</script>