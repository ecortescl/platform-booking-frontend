<template>
  <div v-if="searchPerformed">
    <div v-if="results.length" class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h3 class="text-xl font-bold mb-4">Doctores disponibles</h3>
      <ul>
        <li v-for="professional in results" :key="professional.id" class="mb-2 p-2 border rounded-lg shadow-sm cursor-pointer" @click="selectProfessional(professional)">
          <p class="text-lg font-semibold"><strong>Nombre:</strong> {{ professional.name }}</p>
          <p class="text-gray-700"><strong>Especialidad:</strong> {{ professional.specialty }}</p>
          <p class="text-gray-700"><strong>Ubicación:</strong> {{ professional.location }}</p>
          <p class="text-gray-700"><strong>Disponibilidad:</strong> {{ professional.availability }}</p>
        </li>
      </ul>
    </div>
    <div v-else class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <p class="text-gray-700">No se encontraron resultados</p>
    </div>
    <ProfessionalModal :visible="modalVisible" :professional="selectedProfessional" @close="modalVisible = false" />
  </div>
</template>

<script>
import ProfessionalModal from './ProfessionalModal.vue';

export default {
  name: 'SearchResults',
  components: {
    ProfessionalModal
  },
  props: {
    results: {
      type: Array,
      required: true
    },
    searchPerformed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      modalVisible: false,
      selectedProfessional: null
    };
  },
  methods: {
    selectProfessional(professional) {
      this.selectedProfessional = professional;
      this.modalVisible = true;
    }
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>