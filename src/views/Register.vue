<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <Navbar /> <!-- Agregar el componente Navbar aquí -->

    <div class="flex items-center justify-center flex-1">
      <div class="bg-[#1f2937] shadow-md rounded-lg p-8 max-w-sm w-full"> <!-- Color del fondo -->
        <h1 class="text-3xl font-bold text-center mb-6 text-white">Registro</h1>
        <form @submit.prevent="register">
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
              class="mt-1 block w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <!-- Botón modificado -->
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
    Navbar // Registrar el componente
  },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch('https://api.example.com/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password })
        });
        const data = await response.json();
        if (response.ok) {
          this.$router.push('/login');
        } else {
          this.error = data.message;
        }
      } catch (err) {
        this.error = 'Error en la conexión';
      }
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales adicionales que podrían no estar en Tailwind */
</style>
