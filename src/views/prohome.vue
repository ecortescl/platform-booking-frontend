<template>
  <div class="min-h-screen bg-white font-arima">
    <!-- Componente Navbar -->
  
    <div class="container py-8 mx-auto" style="padding-top: 2rem;">
      <h1 class="mb-8 text-4xl font-bold text-center text-overlay">Panel de Control Profesional</h1>
      
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Calendario de Citas -->
        <div class="bg-white p-6 shadow-md rounded-lg" >
          <h2 class="mb-4 text-2xl font-bold text-center text-overlay">Calendario de Citas</h2>
          <Calendar /> <!-- Componente del Calendario -->
        </div>
        
        <!-- Formulario para Disponibilidad -->
        <div class="bg-white p-6 shadow-md rounded-lg" >
          <h2 class="mb-4 text-2xl font-bold text-center text-overlay">Actualizar Disponibilidad</h2>
          
          <AvailabilityForm /> <!-- Componente para Disponibilidad -->
        </div>
        
        <!-- Estadísticas -->
        <div class="bg-white p-6 shadow-md rounded-lg">
          <h2 class="mb-4 text-2xl font-bold text-center text-overlay">Estadísticas</h2>
          <StatisticsPanel /> <!-- Componente de Estadísticas -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Calendar from '../components/Calendar.vue'; // Componente de calendario
import AvailabilityForm from '../components/AvailabilityForm.vue'; // Formulario de disponibilidad
import StatisticsPanel from '../components/StatisticsPanel.vue'; // Panel de estadísticas

export default {
  name: 'ProfessionalDashboard',
  components: {
    Navbar,
    Calendar,
    AvailabilityForm,
    StatisticsPanel,
  },
};
</script>

<style scoped>
.padding-top {
  padding-top: 2rem; /* Ajusta el valor según sea necesario */
}
</style>