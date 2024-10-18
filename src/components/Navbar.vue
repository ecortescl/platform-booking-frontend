<template>
  <nav class="bg-nav-bg text-nav-text font-nav p-2 rounded-md fixed top-0 w-full z-50 shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img :src="logo" alt="Logo" class="h-10 mr-4" />
        </router-link>
        <ul class="flex gap-8 ml-2">
          <li><a href="#" class="hover:text-nav-hover transition-colors duration-300">Profesionales</a></li>
          <li><a href="#" class="hover:text-nav-hover transition-colors duration-300">Servicios</a></li>

          <li class="relative group">
            <a href="#" class="hover:text-nav-hover transition-colors duration-300">Sucursales y horarios</a>
            <ul class="absolute hidden group-hover:block bg-white text-nav-bg shadow-lg rounded-md mt-2">
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Sedes</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Sucursales</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Horarios de Atención</a></li>
            </ul>
          </li>

          <li><a href="#" class="hover:text-nav-hover transition-colors duration-300">Sobre Nosotros</a></li>

          <li class="relative group">
            <a href="#" class="hover:text-nav-hover transition-colors duration-300">Atención al Cliente</a>
            <ul class="absolute hidden group-hover:block bg-white text-nav-bg shadow-lg rounded-md mt-2">
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Servicio al Cliente</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="flex gap-4">
        <router-link to="/login" class="hover:text-nav-hover transition-colors duration-300">Iniciar Sesión</router-link>
        <router-link to="/register" class="hover:text-nav-hover transition-colors duration-300">Registrarse</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from '../assets/logo.png'; // Asegúrate de que esta ruta sea correcta

export default {
  name: 'NavBar',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
/* Estilos opcionales adicionales que podrían no estar en Tailwind */
</style>
