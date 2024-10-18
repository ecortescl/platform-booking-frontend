<template>
  <div class="flex flex-col min-h-screen">
    <ImageCarousel />
    <div class="flex flex-col items-center justify-center flex-grow">
      <h1 class="text-7xl font-bold mb-8">
        Hello world! con Tailwind
      </h1>
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from '../components/ImageCarousel.vue'; // Importar el carrusel
</script>

<style scoped>
</style>
