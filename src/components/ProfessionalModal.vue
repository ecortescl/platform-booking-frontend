<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <h2 class="text-xl font-bold mb-4">Información del Profesional</h2>
        <p><strong>Nombre:</strong> {{ professional.name }}</p>
        <p><strong>Especialidad:</strong> {{ professional.specialty }}</p>
        <p><strong>Ubicación:</strong> {{ professional.location }}</p>
        <p><strong>Disponibilidad:</strong> {{ professional.availability }}</p>
        <button @click="closeModal" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Agendar cita</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      professional: {
        type: Object,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>