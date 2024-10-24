<template>
    <div class="bg-white shadow-md rounded-lg p-4 max-w-sm w-full">
      <h2 class="text-2xl font-bold text-center mb-4">Search Results</h2>
      <ul>
        <li v-for="result in results" :key="result.id" class="mb-2">
          <p class="text-gray-700">{{ result.title }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    results: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  
  </style>