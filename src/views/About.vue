<template>
  <div class="mt-16">
    <ProfessionalSearch @search="handleSearch" @select-professional="selectProfessional" />
    <div v-if="selectedProfessional" class="mt-4">
      <ProfessionalInfo :profesional="selectedProfessional" />
    </div>
  </div>
</template>

<script>
import ProfessionalSearch from '../components/ProfessionalSearch.vue';
import ProfessionalInfo from '../components/ProfessionalInfo.vue';

export default {
  components: {
    ProfessionalSearch,
    ProfessionalInfo
  },
  data() {
    return {
      selectedProfessional: null
    };
  },
  methods: {
    handleSearch() {
      // Implement search logic here
    },
    selectProfessional(professional) {
      this.selectedProfessional = professional;
    }
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>