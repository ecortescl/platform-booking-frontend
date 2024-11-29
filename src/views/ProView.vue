<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <Navbar /> <!-- Agregar el componente Navbar aquí -->

    <div class="flex items-center justify-center flex-1">
      <!-- Mostrar el componente ProfessionalInformation -->
      <ProfessionalInformation />
    </div>
  </div>
</template>

<script>
import ProfessionalInformation from '../components/ProfessionalInformation.vue';

export default {
  components: {
    
    ProfessionalInformation
  }
};
</script>