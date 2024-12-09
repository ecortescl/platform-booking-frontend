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
              <h2 class="text-2xl font-semibold">{{ professional.names }}</h2>
              <p class="text-gray-600">{{ professional.specialty }}</p>
              <p class="text-gray-600">{{ professional.location }}</p>
            </div>
            <img src="https://via.placeholder.com/50" alt="Professional" class="rounded-full">
          </div>

          <button @click="redirectToReserve(professional)" class="w-full py-2 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ProfessionalInformation',
  setup() {
    const router = useRouter();
    const professionals = ref([]);

    const fetchProfessionals = async () => {
      try {
        const response = await fetch('https://platform-booking-backend.onrender.com/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Filtra los profesionales (idRole: 2)
        professionals.value = data.filter(user => user.idRole === 2);
      } catch (error) {
        console.error('Error fetching professionals:', error);
      }
    };

    onMounted(() => {
      fetchProfessionals();
    });

    const redirectToReserve = (professional) => {
      router.push({ name: 'reserva', params: { professional } });
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

button {
  transition: background-color 0.3s ease;
}
</style>