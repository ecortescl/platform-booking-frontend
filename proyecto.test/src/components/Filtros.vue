<template>
    <div class="filters">
      <label for="specialty">Especialidad:</label>
      <select v-model="selectedSpecialty" @change="applyFilters">
        <option value="">Todas</option>
        <option v-for="specialty in specialties" :key="specialty" :value="specialty">{{ specialty }}</option>
      </select>
  
      <label for="location">Ubicación:</label>
      <select v-model="selectedLocation" @change="applyFilters">
        <option value="">Todas</option>
        <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
      </select>
  
      <label for="availability">Disponibilidad:</label>
      <input type="date" v-model="selectedAvailability" @change="applyFilters" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      specialties: Array,
      locations: Array
    },
    data() {
      return {
        selectedSpecialty: '',
        selectedLocation: '',
        selectedAvailability: ''
      };
    },
    methods: {
      applyFilters() {
        this.$emit('filter', {
          specialty: this.selectedSpecialty,
          location: this.selectedLocation,
          availability: this.selectedAvailability
        });
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>