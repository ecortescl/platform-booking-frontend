<template>
  <div class="reserve-page min-h-screen bg-white font-arima">
    <Navbar /> <!-- Componente Navbar -->
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold text-center text-overlay mb-8">Ver profesionales</h1>
      <professional-information />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import navbar from '../components/navbar.vue';
import professionalInformation from '../components/professionalInformation.vue';

export default {
  name: 'Reserve',
  components: {
    navbar,
    professionalInformation
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