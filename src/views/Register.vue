<template>
  <div>
    <form @submit.prevent="register">
      <div>
        <label for="rut">Rut : </label>
        <input type="text" v-model="rut" required />
      </div>
      <div>
        <label for="name">Nombres : </label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="surname">Apellidos : </label>
        <input type="text" v-model="surname" required />
      </div>
      <div>
        <label for="phone">Telefono : </label>
        <input type="text" v-model="phone" required />
      </div>
      <div>
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
      rut: '',
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            rut: this.rut,
            name: this.name,
            surname: this.surname,
            phone: this.phone,
            email: this.email,
            password: this.password
          })
        });

        if (!response.ok) {
          throw new Error('Error en el registro');  //  personalizar el mensaje de error
        }

        const data = await response.json();
        console.log('Registro exitoso:', data);
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>