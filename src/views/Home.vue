<template>
  <div class="flex flex-col min-h-screen relative font-arima">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:linear-gradient(135deg, #ffffff 0%, #e6f0fa 100%)]"></div>

    <ImageCarousel />

    <div class="flex flex-col items-center justify-center flex-grow" >
      <h1 class="text-7xl mb-8 text-overlay"style="padding-top: 2rem;">
        Encuentra a tu profesional ideal
      </h1>

      <ProfessionalSearch @search="handleSearch" />
      
      <div class="my-10"></div>

      <ProfessionalInformation />
    </div>

    <div class="my-8"></div>

    <div class="how-it-works">
      <h2 class="text-4xl mb-6 text-overlay">¿Cómo Funciona Nuestro Servicio?</h2>
      <div class="steps flex justify-around">
        <router-link to="/register" class="step text-center p-4 rounded-lg shadow-lg">
          <img src="https://picsum.photos/id/5/5000/3334" alt="Registro" class="w-full rounded-lg mb-2" />
          <p>
            <i class="fas fa-user-plus"></i>
            Regístrate fácilmente en pocos pasos. <br />
            <small class="text-gray-600 description">
              <router-link to="/register" class="text-blue-500 hover:text-blue-700">Completa tu perfil y verifica tu cuenta.</router-link>
            </small>
          </p>
        </router-link>
        <router-link to="/professionals" class="step text-center p-4 rounded-lg shadow-lg cursor-pointer">
          <img src="https://picsum.photos/id/201/5000/3333" alt="Búsqueda" class="w-full rounded-lg mb-2" />
          <p>
            <i class="fas fa-search"></i>
            Busca entre cientos de profesionales calificados. <br />
            <small class="text-gray-600 description">
              <router-link to="/professionals" class="text-blue-500 hover:text-blue-700">Encuentra la mejor opción para ti.</router-link>
            </small>
          </p>
        </router-link>
        <router-link to="/login" class="step text-center p-4 rounded-lg shadow-lg cursor-pointer">
          <img src="https://picsum.photos/id/504/5000/3333" alt="Reserva" class="w-full rounded-lg mb-2" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue';
import ProfessionalSearch from '../components/ProfessionalSearch.vue';
import ProfessionalInformation from '../components/ProfessionalInformation.vue';

export default {
  name: 'Home',
  components: {
    ImageCarousel,
    ProfessionalSearch,
    ProfessionalInformation
  },
  methods: {
    handleSearch(searchQuery) {
      // Implement search handling logic here
    }
  }
};
</script>

<style scoped>
.text-overlay {
  color: #154485;
}
</style>