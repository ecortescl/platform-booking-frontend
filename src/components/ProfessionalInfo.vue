<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">{{ profesional.nombre }}</h2>
        <button @click="close" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <p class="mb-2"><strong>Especialidades:</strong> {{ profesional.especialidades.join(', ') }}</p>
      <p class="mb-2"><strong>Experiencia:</strong> {{ profesional.experiencia }} años</p>
      <p class="mb-4"><strong>Contacto:</strong> {{ profesional.contacto }}</p>
      <h3 class="text-xl font-semibold mb-4">Reseñas y Calificaciones</h3>
      <ul class="mb-4">
        <li v-for="reseña in profesional.reseñas" :key="reseña.id" class="mb-2 p-2 border rounded-lg shadow-sm">
          <p><strong>{{ reseña.usuario }}:</strong> {{ reseña.comentario }} ({{ reseña.calificacion }} estrellas)</p>
        </li>
      </ul>
      <button @click="reservarCita" class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Reservar Cita</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfessionalInfo',
  props: {
    profesional: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    reservarCita() {
      this.$router.push(`/reservar/${this.profesional.nombre}`);
    }
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>