<template>
  <div class="flex flex-col min-h-screen">
    <ImageCarousel />
    <div class="flex flex-col items-center justify-center flex-grow">
      <h1 class="text-7xl font-bold mb-8">
        Buscar Profesionales
      </h1>
      <ProfessionalSearch @search="handleSearch" />
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from '../components/ImageCarousel.vue'; // Importar el carrusel
import ProfessionalSearch from '../components/ProfessionalSearch.vue';

function handleSearch(criteria) {
  console.log('Search criteria:', criteria);
 
}
</script>

<style scoped>
</style>
