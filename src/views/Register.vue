<template>
    <div class="register-form">
      <form @submit.prevent="register">
        <div>
          <div>
          <label for="rut">Rut : </label>
          <input type="rut" v-model="rut" required />
        </div>
        <div>
          <label for="name">Nombres : </label>
          <input type="name" v-model="name" required />
        </div>
        <div>
          <label for="surname">Apellidos : </label>
          <input type="surname" v-model="surname" required />
        </div>
        <div>
          <label for="phone">telefono : </label>
          <input type="phone" v-model="phone" required />
        </div>
          <label for="email">Correo Electrónico : </label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Contraseña : </label>
          <input type="password" v-model="password" required minlength="6" />
        </div>
        <button type="submit">Registrarse</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
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