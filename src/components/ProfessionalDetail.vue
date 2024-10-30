<template>
  <div v-if="professional" class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-xl font-bold mb-4">Información del Profesional</h2>
    <p><strong>Nombre:</strong> {{ professional.name }}</p>
    <p><strong>Especialidad:</strong> {{ professional.specialty }}</p>
    <p><strong>Ubicación:</strong> {{ professional.location }}</p>
    <p><strong>Disponibilidad:</strong> {{ professional.availability }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      professional: null
    };
  },
  created() {
    this.fetchProfessional();
  },
  methods: {
    async fetchProfessional() {
      try {
        const response = await fetch(`http://localhost:3000/professionals/${this.id}`);
        if (response.ok) {
          this.professional = await response.json();
        } else {
          console.error('Error fetching professional data');
        }
      } catch (error) {
        console.error('Error fetching professional data', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>