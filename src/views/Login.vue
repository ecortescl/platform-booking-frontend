<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <!-- Agregar el componente Navbar aquí -->

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
          <p v-if="errorMessage" class="text-red-500 text-center mt-2">{{ errorMessage }}</p>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const login = async () => {
      try {
        const response = await fetch('https://platform-booking-backend.onrender.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value
          })
        });

        if (!response.ok) {
          const data = await response.json();
          errorMessage.value = data.message || 'Error al iniciar sesión';
        } else {
          const data = await response.json();
          // Manejar el éxito del inicio de sesión, por ejemplo, redirigir al usuario
          router.push('/home');
        }
      } catch (error) {
        errorMessage.value = 'Error de red';
      }
    };

    return {
      email,
      password,
      errorMessage,
      login
    };
  }
};
</script>

<style scoped>
/* Agrega tus estilos aquí si es necesario */
</style>