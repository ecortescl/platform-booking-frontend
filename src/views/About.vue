<template>
  <div class="min-h-screen bg-white about-page font-arima">
    <Navbar /> <!-- Componente Navbar -->
    <div class="container py-8 mx-auto">
      <h1 class="mb-8 text-4xl font-bold text-center text-overlay">Sobre Nosotros</h1>
      <div class="bg-[#1f2937] shadow-md rounded-lg p-8 max-w-2xl mx-auto text-white">
        <p class="mb-4">
          Somos una empresa dedicada a proporcionar servicios de alta calidad a nuestros clientes. Nuestro equipo está compuesto por profesionales altamente capacitados y comprometidos con la excelencia.
        </p>
        <p class="mb-4">
          Nuestra misión es ofrecer soluciones innovadoras y personalizadas que satisfagan las necesidades de nuestros clientes. Nos esforzamos por mantenernos a la vanguardia de la industria y por mejorar continuamente nuestros servicios.
        </p>
        <p class="mb-4">
          Valoramos la confianza y la satisfacción de nuestros clientes, y trabajamos arduamente para construir relaciones duraderas basadas en la transparencia y el respeto mutuo.
        </p>
        <p class="mb-4">
          Gracias por elegirnos. Estamos aquí para ayudarle y esperamos poder servirle en el futuro.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'; // Importar el componente Navbar

export default {
  name: 'About',
  components: {
    
  }
};
</script>

<style scoped>
.about-page {
  background-color: #e6f0fa;
}

.text-overlay {
  color: #154485;
}



.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.p-8 {
  padding: 2rem;
}

.max-w-2xl {
  max-width: 42rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.text-white {
  color: #ffffff;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>