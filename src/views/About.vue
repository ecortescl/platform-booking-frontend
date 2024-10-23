<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <div class="flex items-center justify-center flex-1">
      <div class="bg-[#1f2937] shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 class="text-3xl font-bold text-center mb-6 text-white">About Page</h1>
        <p class="text-gray-300 text-center mb-6">Learn more about us on this page.</p>
        <ProfessionalSearch />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfessionalSearch from '../components/ProfessionalSearch.vue'; // Import the component
</script>

<style scoped>
/* Optional additional styles that might not be in Tailwind */
</style>