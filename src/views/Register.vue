<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
  <!-- Componente Navbar -->
    
    <div class="flex items-center justify-center flex-1">
      <div class="bg-[#1f2937] shadow-md rounded-lg p-8 max-w-sm w-full"> <!-- Color de fondo -->
        <h1 class="text-3xl font-bold text-center mb-6 text-white">Registro</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label for="rut" class="block text-sm font-medium text-gray-300">Rut:</label>
            <input 
              type="text" 
              v-model="run" 
              id="rut"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-300">Nombres:</label>
            <input 
              type="text" 
              v-model="names" 
              id="name" 
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="surname" class="block text-sm font-medium text-gray-300">Apellidos:</label>
            <input 
              type="text" 
              v-model="surnames" 
              id="surname"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-300">Teléfono:</label>
            <input 
              type="text" 
              v-model="phone" 
              id="phone" 
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-300">Correo Electrónico:</label>
            <input 
              type="email" 
              v-model="email" 
              id="email"
              required
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-300">Contraseña:</label>
            <input 
              type="password" 
              v-model="password" 
              id="password"
              required
              minlength="6"
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <!-- Botón de registro -->
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-[#FFD700] transition duration-200">
            Registrarse
          </button>
          <p v-if="error" class="text-red-500 text-center mt-2">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'; // Importar el componente Navbar

export default {
  components: {
    Navbar
  },
  data() {
    return {
      run: '',
      names: '',
      surnames: '',
      phone: '',
      email: '',
      password: '',
      idRole: '1',
      registered: true,
      error: ''
    };
  },
  methods: {
  async register() {
    try {
      const response = await fetch('https://platform-booking-backend.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rut: this.run, // Cambia `run` a `rut` si el backend lo espera así
          names: this.names,
          surnames: this.surnames,
          phone: this.phone,
          email: this.email,
          password: this.password,
          idRole: this.idRole, // Este campo parece estar relacionado con roles
          registered: this.registered
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro');
      }

      const data = await response.json();
      console.log('Registro exitoso:', data);
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      this.error = error.message;
    }
  }
}
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
