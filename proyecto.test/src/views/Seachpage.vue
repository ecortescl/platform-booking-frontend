<template>
    <div class="search-page">
      <Buscar @search="handleSearch" />
      <Filtros
        :specialties="specialties"
        :locations="locations"
        @filter="handleFilter"
      />
      <Resultados :results="filteredResults" />
    </div>
  </template>
  
  <script>
  import Buscar from './Buscar.vue';
  import Filtros from './Filtros.vue';
  import Resultados from './Resultados.vue';
  
  export default {
    components: {
      Buscar,
      Filtros,
      Resultados
    },
    data() {
      return {
        results: [],
        filteredResults: [],
        specialties: ['Cardiología', 'Dermatología', 'Neurología'],
        locations: ['Madrid', 'Barcelona', 'Valencia']
      };
    },
    methods: {
      async handleSearch(criteria) {
        try {
          const response = await fetch('https://api.example.com/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(criteria)
          });
          const data = await response.json();
          this.results = data;
          this.filteredResults = data;
        } catch (error) {
          console.error('Error al buscar profesionales:', error);
        }
      },
      handleFilter(filters) {
        this.filteredResults = this.results.filter(professional => {
          return (
            (!filters.specialty || professional.specialty === filters.specialty) &&
            (!filters.location || professional.location === filters.location) &&
            (!filters.availability || professional.availability.includes(filters.availability))
          );
        });
      }
    }
  };
  </script>
  