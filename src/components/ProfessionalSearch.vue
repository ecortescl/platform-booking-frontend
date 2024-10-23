<template>
  <div class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Buscar Profesionales</h2>
    <form @submit.prevent="searchProfessionals">
      <div class="mb-4">
        <label class="block text-gray-700">Especialidad</label>
        <input v-model="specialty" type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej. Dentista">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Ubicación</label>
        <input v-model="location" type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej. Madrid">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Disponibilidad</label>
        <input v-model="availability" type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej. Lunes a Viernes">
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Buscar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProfessionalSearch',
  data() {
    return {
      specialty: '',
      location: '',
      availability: ''
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
        // Handle the response data as needed
        console.log(data);
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