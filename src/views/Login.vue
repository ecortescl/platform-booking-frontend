<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <Navbar /> <!-- Agregar el componente Navbar aquí -->

    <div class="flex items-center justify-center flex-1">
      <div class="bg-[#1f2937] shadow-md rounded-lg p-8 max-w-sm w-full"> <!-- Color del fondo -->
        <h1 class="text-3xl font-bold text-center mb-6 text-white">Bienvenido</h1>
        <p class="text-center mb-4 text-white">Ingresa tus credenciales para acceder a tu cuenta.</p>
        <form @submit.prevent="login">
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
            Iniciar Sesión
          </button>
          <p v-if="error" class="text-red-500 text-center mt-2">{{ error }}</p>
        </form>
        <!-- Botón "¿Olvidó su contraseña?" con cambio de color -->
        <div class="mt-4 text-center">
          <router-link 
            to="/forgotpass" 
            class="text-blue-500 hover:text-[#FFD700] transition duration-200">
            ¿Olvidó su contraseña?
          </router-link>
        </div>
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
    validateForm() {
      if (!this.email || !this.password) {
        this.error = 'Todos los campos son obligatorios';
        return false;
      }
      if (!this.email.includes('@')) {
        this.error = 'Correo electrónico no válido';
        return false;
      }
      return true;
    },
    async login() {
      if (!this.validateForm()) return;
      try {
        const response = await fetch('https://api.example.com/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password })
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token);
          this.$router.push('/dashboard');
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
