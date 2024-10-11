<template>
    <div class="search-results">
      <div v-if="results.length === 0">No se encontraron resultados</div>
      <ul v-else>
        <li v-for="professional in paginatedResults" :key="professional.id">
          {{ professional.name }} - {{ professional.specialty }} - {{ professional.location }}
        </li>
      </ul>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      results: Array
    },
    data() {
      return {
        currentPage: 1,
        resultsPerPage: 10
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.results.length / this.resultsPerPage);
      },
      paginatedResults() {
        const start = (this.currentPage - 1) * this.resultsPerPage;
        const end = start + this.resultsPerPage;
        return this.results.slice(start, end);
      }
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>