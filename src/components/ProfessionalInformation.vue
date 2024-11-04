<template>
    <div class="reserve-page min-h-screen bg-white font-arima">
      <Navbar /> <!-- Componente Navbar -->
      <div class="container mx-auto py-8">
        <h1 class="text-4xl font-bold text-center text-overlay mb-8">Profesionales</h1>
        
        
  
        <!-- Lista de profesionales -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="professional in professionals" :key="professional.id" class="professional-card p-4 border rounded-lg shadow-lg">
            <div class="flex justify-between items-center mb-4">
              <div>
                <h2 class="text-2xl font-semibold">{{ professional.name }}</h2>
                <p class="text-gray-600">{{ professional.description }}</p>
              </div>
              <img src="https://via.placeholder.com/50" alt="Professional" class="rounded-full">
            </div>
            <div class="flex justify-around mb-4">
              <div v-for="time in professional.availableTimes" :key="time" class="time-slot text-center p-2 border rounded-lg cursor-pointer hover:bg-blue-100">
                {{ time }}
              </div>
            </div>
            <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Reservar</button>
          </div>
        </div>
  
        <!-- Navegación -->
        <div class="flex justify-between mt-8">
          <router-link to="/" class="text-blue-500 hover:text-blue-700">&lt; Volver a la página principal</router-link>
          <router-link to="/professionals" class="text-blue-500 hover:text-blue-700">&lt; Volver a la página anterior</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Navbar from '../components/Navbar.vue';
  
  export default {
    name: 'Reserve',
    components: {
      navbar
    },
    setup() {
      const professionals = ref([
        { id: 1, name: 'Profesional 1', description: 'Texto secundario', availableTimes: ['10:00', '11:00', '12:00', '13:00'] },
        { id: 2, name: 'Profesional 2', description: 'Texto secundario', availableTimes: ['12:30', '13:15', '15:00', '16:30'] },
        { id: 3, name: 'Profesional 3', description: 'Texto secundario', availableTimes: ['08:00', '09:30', '11:00', '13:00'] },
        { id: 4, name: 'Profesional 4', description: 'Texto secundario', availableTimes: ['12:00', '15:00', '15:30', '16:00'] },
        { id: 5, name: 'Profesional 5', description: 'Texto secundario', availableTimes: ['12:30', '13:30', '14:00', '14:30'] },
        { id: 6, name: 'Profesional 6', description: 'Texto secundario', availableTimes: ['10:00', '11:00', '12:00', '13:00'] },
      ]);
  
      return {
        professionals
      };
    }
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
  
  
  button {
    transition: background-color 0.3s ease;
  }
  </style>