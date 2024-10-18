<template>
  <div id="app">
    <Navbar /> <!-- Incluye el Navbar aquí -->
    <router-view></router-view> <!-- Aquí se renderizarán las rutas -->
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
