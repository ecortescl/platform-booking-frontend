<template>
  <div class="min-h-screen bg-white reserve-page font-arima">
    <Navbar /> <!-- Componente Navbar -->
    <div class="container py-8 mx-auto">
      <h1 class="mb-8 text-4xl font-bold text-center text-overlay">Profesionales</h1>

      <!-- Lista de profesionales -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="professional in professionals" :key="professional.id"
          class="p-4 border rounded-lg shadow-lg professional-card">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-2xl font-semibold">{{ professional.name }}</h2>
              <p class="text-gray-600">{{ professional.description }}</p>
            </div>
            <img src="https://via.placeholder.com/50" alt="Professional" class="rounded-full">
          </div>
          <div class="flex justify-around mb-4">
            <div v-for="time in professional.availableTimes" :key="time"
              class="p-2 text-center border rounded-lg cursor-pointer time-slot hover:bg-blue-100">
              {{ time }}
            </div>
          </div>
          <button @click="redirectToReserve" class="w-full py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">Reservar</button>
        </div>
      </div>

      <!-- Navegación -->
      
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ProfessionalInformation',
  setup() {
    const router = useRouter();
    const professionals = ref([
      { id: 1, name: 'Dr. José Rodríguez', description: 'Cardiólogo', availableTimes: ['10:00', '11:00', '12:00', '13:00'] },
      { id: 2, name: 'Profesional 2', description: 'Texto secundario', availableTimes: ['12:30', '13:15', '15:00', '16:30'] },
      { id: 3, name: 'Profesional 3', description: 'Texto secundario', availableTimes: ['08:00', '09:30', '11:00', '13:00'] },
      { id: 4, name: 'Profesional 4', description: 'Texto secundario', availableTimes: ['12:00', '15:00', '15:30', '16:00'] },
      { id: 5, name: 'Profesional 5', description: 'Texto secundario', availableTimes: ['12:30', '13:30', '14:00', '14:30'] },
      { id: 6, name: 'Profesional 6', description: 'Texto secundario', availableTimes: ['10:00', '11:00', '12:00', '13:00'] },
      { id: 7, name: 'Profesional 7', description: 'Texto secundario', availableTimes: ['12:30', '13:15', '15:00', '16:30'] },
      { id: 8, name: 'Profesional 8', description: 'Texto secundario', availableTimes: ['08:00', '09:30', '11:00', '13:00'] },
      { id: 9, name: 'Profesional 9', description: 'Texto secundario', availableTimes: ['12:00', '15:00', '15:30', '16:00'] },
    ]);

    const redirectToReserve = () => {
      router.push({ name: 'reserva' });
    };

    return {
      professionals,
      redirectToReserve
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
  margin-bottom: var(--time-slot-margin-bottom, 80px); /* Puedes ajustar el valor predeterminado */

}

/* Ajusta el margen inferior del contenedor principal */
.container {
  margin-bottom: 2rem; /* Ajusta este valor según tus necesidades */
}
</style>