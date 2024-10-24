<template>
  <div class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Buscar Profesionales</h2>
    <form @submit.prevent="searchProfessionals">
      <div class="mb-4">
  <label class="block text-gray-700">Especialidad</label>
  <div>
    <label class="inline-flex items-center">
      <input type="radio" v-model="specialty" value="Dentista" class="form-radio">
      <span class="ml-2">Dentista</span>
    </label>
    <label class="inline-flex items-center ml-4">
      <input type="radio" v-model="specialty" value="Cardiólogo" class="form-radio">
      <span class="ml-2">Cardiólogo</span>
    </label>
    <label class="inline-flex items-center ml-4">
      <input type="radio" v-model="specialty" value="Pediatra" class="form-radio">
      <span class="ml-2">Pediatra</span>
    </label>
  </div>
</div>
      <div class="mb-4">
        <label class="block text-gray-700">Ubicación</label>
        <input v-model="location" type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej. Madrid">
      </div>
      <div class="mb-4">
  <label class="block text-gray-700">Disponibilidad</label>
  <input v-model="availability" type="date" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
  <input v-model="availabilityEnd" type="date" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2">
</div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Buscar</button>  
    </form>
    
  </div>
</template>

<script>
import SearchResults from './SearchResults.vue';

export default {
  name: 'ProfessionalSearch',
  components: {
    SearchResults
  },
  data() {
    return {
      specialty: '',
      location: '',
      availability: '',
      searchResults: []
    };
  },
  methods: {
    async searchProfessionals() {
      try {
        const response = await fetch('https://your-backend-api.com/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            specialty: this.specialty,
            location: this.location,
            availability: this.availability
          })
        });
        const data = await response.json();
        this.searchResults = data.results; // Assuming the API returns an object with a 'results' array
      } catch (error) {
        console.error('Error fetching professionals:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>