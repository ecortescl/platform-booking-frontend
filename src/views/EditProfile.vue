<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <!-- Componente Navbar -->
    
    <div class="flex items-center justify-center flex-1">
      <div class="bg-[#1f2937] shadow-md rounded-lg p-8 max-w-sm w-full"> <!-- Color de fondo -->
        <h1 class="text-3xl font-bold text-center mb-6 text-white">Editar Perfil</h1>
        <form @submit.prevent="saveProfile">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-300">Nombre:</label>
            <input 
              type="text" 
              v-model="profile.name" 
              id="name"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-300">Contraseña:</label>
            <input 
              type="password" 
              v-model="profile.password" 
              id="password"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-300">Teléfono:</label>
            <input 
              type="text" 
              v-model="profile.phone" 
              id="phone"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-gray-300">Dirección:</label>
            <input 
              type="text" 
              v-model="profile.address" 
              id="address"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="city" class="block text-sm font-medium text-gray-300">Ciudad:</label>
            <input 
              type="text" 
              v-model="profile.city" 
              id="city"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <!-- Botón de guardar -->
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-[#FFD700] transition duration-200">
            Guardar Información
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data() {
    return {
      profile: {
        name: '',
        password: '',
        phone: '',
        address: '',
        city: ''
      }
    };
  },
  methods: {
    saveProfile() {
      // Aquí puedes agregar la lógica para guardar la información del perfil
      console.log('Información del perfil guardada:', this.profile);
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales */
</style>