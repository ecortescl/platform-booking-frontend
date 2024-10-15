<template>
    <div class="forgot-password-form">
      <form @submit.prevent="forgotPassword">
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" v-model="email" required />
        </div>
        <button type="submit">Recuperar Contraseña</button>
        <p v-if="error">{{ error }}</p>
        <p v-if="message">{{ message }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        error: '',
        message: ''
      };
    },
    methods: {
      async forgotPassword() {
        try {
          const response = await fetch('https://api.example.com/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.email })
          });
          const data = await response.json();
          if (response.ok) {
            this.message = 'Correo de recuperación enviado';
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