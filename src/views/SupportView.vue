<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <!-- Componente Navbar -->
    
    <div class="flex items-center justify-center flex-1">
      <div class="bg-[#1f2937] shadow-md rounded-lg p-8 max-w-sm w-full"> <!-- Color de fondo -->
        <h1 class="text-3xl font-bold text-center mb-6 text-white">Soporte</h1>
        <form @submit.prevent="submitSupportRequest">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-300">Nombre:</label>
            <input 
              type="text" 
              v-model="support.name" 
              id="name"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-300">Correo Electrónico:</label>
            <input 
              type="email" 
              v-model="support.email" 
              id="email"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="issue" class="block text-sm font-medium text-gray-300">Problema:</label>
            <textarea 
              v-model="support.issue" 
              id="issue"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>
          </div>
          <!-- Botón de enviar -->
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-[#FFD700] transition duration-200">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportView',
  data() {
    return {
      support: {
        name: '',
        email: '',
        issue: ''
      }
    };
  },
  methods: {
    submitSupportRequest() {
      // Aquí puedes agregar la lógica para enviar la solicitud de soporte
      console.log('Solicitud de soporte enviada:', this.support);
    }
  }
};
</script>

<style scoped>

.SupportView-page {
  background-color: #e6f0fa;
}
/* Estilos opcionales */
</style>