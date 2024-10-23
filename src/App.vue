<template>
  <div id="app">
    <Navbar /> <!-- Incluye el Navbar aquí -->
    <router-view></router-view> <!-- Aquí se renderizarán las rutas -->
  </div>

  <div class="flex flex-col min-h-screen bg-gray-200">
    <div class="flex items-center justify-center flex-1">
      <ProfessionalSearch />
    </div>
  </div>

  
</template>

<script>
import Navbar from './components/Navbar.vue'; // Asegúrate de que la ruta sea correcta


export default {
  name: 'App',
  components: {
    Navbar // Registra el componente Navbar
  }
}
</script>

<style>
/* Tus estilos aquí */
</style>
