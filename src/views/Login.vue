<template>
    <div>
      <Navbar />  </div>
  
      <div class="login-page">
        <div class="login-column">
          <form @submit.prevent="login">
            <div class="info-column">
              <!-- Aquí puedes agregar cualquier contenido adicional, como imágenes o texto informativo -->
              <h1 class="text-3xl font-bold">          
                        Bienvenido
                         </h1>
              <p>Ingresa tus credenciales para acceder a tu cuenta.</p>
            </div>
  
            <div>
              <label for="email">Correo Electrónico : </label>
              <input type="email" v-model="email" id="email" />
            </div>
            <br>
            <div>
              <label for="password">Contraseña : </label>
              <input type="password" v-model="password" id="password" />
              <br>
            </div>
            <button type="submit">Iniciar Sesión</button>
            <p v-if="error">{{ error }}</p>
          </form>
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