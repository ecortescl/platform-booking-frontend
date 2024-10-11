<template>
    <div class="search-form">
      <form @submit.prevent="searchProfessionals">
        <div>
          <label for="specialty">Especialidad:</label>
          <input type="text" v-model="specialty" id="specialty" />
        </div>
        <div>
          <label for="location">Ubicación:</label>
          <input type="text" v-model="location" id="location" />
        </div>
        <div>
          <label for="availability">Disponibilidad:</label>
          <input type="date" v-model="availability" id="availability" />
        </div>
        <button type="submit">Buscar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        specialty: '',
        location: '',
        availability: ''
      };
    },
    methods: {
      searchProfessionals() {
        this.$emit('search', {
          specialty: this.specialty,
          location: this.location,
          availability: this.availability
        });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  