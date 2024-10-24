<template>
    <div class="flex flex-col min-h-screen">
      <!-- Caja de Selección de Ciudad y Sucursal -->
      <div class="selection-box p-6 bg-white rounded-lg shadow-lg my-10">
        <h2 class="text-3xl font-bold mb-4">Selecciona Ciudad y Sucursal</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="city" class="block text-lg font-semibold mb-2">Ciudad:</label>
            <select v-model="selectedCity" id="city" class="border rounded-lg p-2 w-full">
              <option disabled value="">Selecciona una ciudad</option>
              <option v-for="city in cities" :key="city">{{ city }}</option>
            </select>
          </div>
          <div>
            <label for="branch" class="block text-lg font-semibold mb-2">Sucursal:</label>
            <select v-model="selectedBranch" id="branch" class="border rounded-lg p-2 w-full">
              <option disabled value="">Selecciona una sucursal</option>
              <option v-for="branch in branches" :key="branch">{{ branch }}</option>
            </select>
          </div>
        </div>
        <button @click="fetchProfessionals" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Enviar
        </button>
      </div>
  
      <!-- Sección de Profesionales Disponibles -->
      <div v-if="professionals.length > 0" class="professionals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h3 class="text-2xl font-bold mb-4">Profesionales Disponibles</h3>
        <div v-for="professional in professionals" :key="professional.name" class="professional-card border rounded-lg p-4 shadow-lg">
          <img :src="professional.image" alt="Profesional" class="rounded-lg w-full h-48 object-cover mb-2" />
          <h4 class="text-xl font-semibold">{{ professional.name }}</h4>
          <p class="text-gray-600">{{ professional.specialty }}</p>
          <p class="text-gray-700">Experiencia: {{ professional.experience }} años</p>
          <p class="text-gray-700">Calificación: {{ professional.rating }} ★</p>
          <p class="text-gray-600 mt-2">{{ professional.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Datos de las ciudades y sucursales
  const cities = [
    'Santiago',
    'Temuco',
    'Concepción',
    'Antofagasta',
    'Iquique',
    'Valdivia',
    'Valparaíso',
    'Viña del Mar'
  ];
  
  const branches = [
    'Sucursal Central',
    'Sucursal Norte',
    'Sucursal Sur',
    'Sucursal Este',
    'Sucursal Oeste'
  ];
  
  // Variables reactivas
  const selectedCity = ref('');
  const selectedBranch = ref('');
  const professionals = ref([]);
  
  // Simulación de datos de profesionales con más detalles
  const allProfessionals = [
    { 
      name: 'Carlos López', 
      specialty: 'Médico', 
      experience: 10, 
      rating: 4.8, 
      description: 'Especialista en medicina general y cuidado de la salud.', 
      image: 'https://picsum.photos/id/1005/400/300' 
    },
    { 
      name: 'María González', 
      specialty: 'Dentista', 
      experience: 8, 
      rating: 4.6, 
      description: 'Experta en odontología estética y rehabilitadora.', 
      image: 'https://picsum.photos/id/1006/400/300' 
    },
    { 
      name: 'Juan Martínez', 
      specialty: 'Psicólogo', 
      experience: 5, 
      rating: 4.9, 
      description: 'Psicólogo clínico con enfoque en terapia cognitiva conductual.', 
      image: 'https://via.placeholder.com/400x300.png?text=Juan+Mart%C3%ADnez' // Imagen provisional
    },
    { 
      name: 'Ana Rodríguez', 
      specialty: 'Fisioterapeuta', 
      experience: 7, 
      rating: 4.7, 
      description: 'Fisioterapeuta especializada en rehabilitación deportiva.', 
      image: 'https://picsum.photos/id/1008/400/300' 
    },
  ];
  
  // Función para obtener profesionales según la selección
  const fetchProfessionals = () => {
    // Aquí puedes agregar lógica para filtrar los profesionales por ciudad y sucursal
    professionals.value = allProfessionals; // Muestra todos los profesionales por ahora
  };
  </script>
  
  <style scoped>
  .selection-box {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
  }
  
  .professionals-grid {
    margin-top: 20px;
  }
  
  .professional-card {
    transition: transform 0.2s;
  }
  
  .professional-card:hover {
    transform: scale(1.05);
  }
  </style>
  