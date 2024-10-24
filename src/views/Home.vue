<template>
  <div class="flex flex-col min-h-screen relative font-arima">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:linear-gradient(135deg, #ffffff 0%, #e6f0fa 100%)]"></div>

    <ImageCarousel />

    <div class="flex flex-col items-center justify-center flex-grow">
      <h1 class="text-7xl mb-8 text-overlay">
        Encuentra a tu profesional ideal

        


      </h1>
      <ProfessionalSearch @search="handleSearch" />
    </div>

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
          <p>
            <i class="fas fa-calendar-check"></i>
            Reserva tu cita en minutos. <br />
            <small class="text-gray-600 description">
              <router-link to="/login" class="text-blue-500 hover:text-blue-700">Confirma tu cita fácilmente.</router-link>
            </small>
          </p>
        </router-link>
      </div>
    </div>

    <div class="reviews mt-10">
      <h3 class="text-3xl mb-4 text-overlay">Lo que dicen nuestros usuarios</h3>
      <div class="review-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="review-item border rounded-lg p-4 shadow-lg">
          <div class="flex items-center mb-2">
            <img src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg" alt="Usuario" class="rounded-full w-12 h-12 mr-2" />
            <div>
              <p class="font-semibold">Juan Pérez</p>
              <div class="stars">
                <span v-for="star in 5" :key="star" class="text-yellow-500">&#9733;</span>
              </div>
            </div>
          </div>
          <p class="text-xl italic">"Excelente servicio, muy profesional."</p>
        </div>
        <div class="review-item border rounded-lg p-4 shadow-lg">
          <div class="flex items-center mb-2">
            <img src="https://picsum.photos/id/338/2000/1333" alt="Usuario" class="rounded-full w-12 h-12 mr-2" />
            <div>
              <p class="font-semibold">Ana Gómez</p>
              <div class="stars">
                <span v-for="star in 5" :key="star" class="text-yellow-500">&#9733;</span>
              </div>
            </div>
          </div>
          <p class="text-xl italic">"Me ayudaron a encontrar exactamente lo que necesitaba."</p>
        </div>
        <div class="review-item border rounded-lg p-4 shadow-lg">
          <div class="flex items-center mb-2">
            <img src="https://picsum.photos/id/349/3264/2176" alt="Usuario" class="rounded-full w-12 h-12 mr-2" />
            <div>
              <p class="font-semibold">Luis Rodríguez</p>
              <div class="stars">
                <span v-for="star in 5" :key="star" class="text-yellow-500">&#9733;</span>
              </div>
            </div>
          </div>
          <p class="text-xl italic">"Rápido y fácil, ¡recomendado!"</p>
        </div>
      </div>
    </div>

    <div class="faq mt-10">
      <h3 class="text-3xl mb-4 text-overlay">Preguntas Frecuentes</h3>
      <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
        <button 
          @click="faq.open = !faq.open" 
          class="w-full text-left p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex justify-between items-center"
        >
          <h4 class="text-xl font-semibold">{{ faq.question }}</h4>
          <span class="text-gray-600">{{ faq.open ? '-' : '+' }}</span>
        </button>
        <div v-if="faq.open" class="mt-2 pl-4">
          <p class="font-semibold">{{ faq.answer }}</p>
          <p class="mt-2 text-gray-700">{{ faq.explanation }}</p>
        </div>
      </div>
    </div>

    <div class="stats flex justify-around mt-10">
      <div class="stat text-center">
        <h2 class="text-4xl font-bold">500+</h2>
        <p>Profesionales disponibles</p>
      </div>
      <div class="stat text-center">
        <h2 class="text-4xl font-bold">1000+</h2>
        <p>Citas reservadas</p>
      </div>

      
    </div>
  </div>
</template>

<script setup>
import ImageCarousel from '../components/ImageCarousel.vue'; // Importar el carrusel
import ProfessionalSearch from '../components/ProfessionalSearch.vue';

const faqs = [
  {
    question: "¿Cómo me registro?",
    answer: "Puedes registrarte fácilmente haciendo clic en el botón 'Comienza Ahora' y siguiendo las instrucciones.",
    explanation: "Para registrarte, primero necesitas proporcionar tu nombre, correo electrónico y crear una contraseña. Luego, recibirás un enlace de verificación en tu correo.",
    open: false,
  },
  {
    question: "¿Cuánto cuesta el servicio?",
    answer: "El costo del servicio depende del profesional que elijas y el tipo de servicio que requieras.",
    explanation: "Los precios pueden variar dependiendo del tipo de servicio y el profesional. Te recomendamos revisar el perfil de cada profesional para obtener más detalles.",
    open: false,
  },
];
</script>

<style scoped>
.how-it-works {
  text-align: center;
  padding: 40px;
}

.steps {
  display: flex;
  justify-content: space-around;
}

.step {
  width: 30%;
  position: relative;
  background-color: #f5f5f5;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border-radius: 8px;
  padding: 20px;
}

.step:hover {
  transform: scale(1.05);
  background-color: #154485;
  color: white;
}

.step:hover p,
.step:hover .description {
  color: white;
}

.description {
  color: #4a5568;
}

.text-overlay {
  color: #154485;
}

.reviews {
  margin-top: 40px;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.review-item {
  transition: transform 0.3s ease;
}

.review-item:hover {
  transform: scale(1.05);
}

.faq {
  margin: 10px 0;
}

.faq-item {
  transition: background-color 0.3s ease;
}

.faq-item:hover {
  background-color: #f0f0f0;
}

.faq-item button {
  width: 100%;
  text-align: left;
}

.font-arima {
  font-family: 'Arima', sans-serif;
}
</style>

