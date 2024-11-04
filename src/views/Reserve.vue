<template>
  <div class="min-h-screen bg-white reserve-page font-arima">
    <Navbar /> <!-- Componente Navbar -->
    <div class="container py-8 mx-auto">
      <h1 class="mb-8 text-4xl font-bold text-center text-overlay">Ver profesionales</h1>
      <ProfessionalInformation />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue'; // Importar el componente Navbar
import ProfessionalInformation from '../components/ProfessionalInformation.vue';

export default {
  name: 'Reserve',
  components: {
    Navbar,
    ProfessionalInformation
  },
};
</script>

<style scoped>
.reserve-page {
  background-color: #e6f0fa;
}

.text-overlay {
  color: #154485;
}

.professional-card {
  transition: transform 0.3s ease;
}

.professional-card:hover {
  transform: scale(1.05);
}

.time-slot {
  width: 70px;
}
</style>