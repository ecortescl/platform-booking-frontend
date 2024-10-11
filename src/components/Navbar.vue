<template>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li><a href="#">Profesionales</a></li>
      <li><a href="#">Servicios</a></li>

      <!-- Menú desplegable de Sucursales y horarios -->
      <li class="dropdown">
        <a href="#">Sucursales y horarios</a>
        <ul class="dropdown-menu">
          <li><a href="#">Sedes</a></li>
          <li><a href="#">Sucursales</a></li>
          <li><a href="#">Horarios de Atención</a></li>
        </ul>
      </li>

      <li><a href="#">Sobre Nosotros</a></li>

      <!-- Menú desplegable de Atención al Cliente -->
      <li class="dropdown">
        <a href="#">Atención al Cliente</a>
        <ul class="dropdown-menu">
          <li><a href="#">Servicio al Cliente</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  background-color: #333; /* Color oscuro */
  color: #fff; /* Color del texto */
  padding: 1rem; /* Espaciado interno */
  position: fixed; /* Fija la navbar en la parte superior */
  top: 0; /* Posición en la parte superior */
  width: 100%; /* Ancho completo */
  z-index: 1000; /* Asegura que la navbar esté por encima de otros elementos */
}

.navbar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 50px;
}

.navbar-menu li {
  position: relative;
}

.navbar-menu a {
  text-decoration: none;
  color: #e7ebf0;
  padding: 10px 15px;
  display: inline-block;
  border: 1px solid transparent;
}

.navbar-menu a:hover {
  border: 1px solid #1e4063;
  border-radius: 4px;
}

/* Estilos para los dropdowns */
.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin: 0;
  border-radius: 4px;
  top: 100%;
  left: 0;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  color: #333;
  padding: 5px 10px;
  display: block;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
