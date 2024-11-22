<template>
    <form @submit.prevent="submitAvailability" class="space-y-4">
      <div>
        <label class="block text-sm font-bold">Fecha</label>
        <input
          type="date"
          v-model="availability.date"
          class="w-full border rounded-md p-2"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-bold">Hora de Inicio</label>
        <input
          type="time"
          v-model="availability.start"
          class="w-full border rounded-md p-2"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-bold">Hora de Fin</label>
        <input
          type="time"
          v-model="availability.end"
          class="w-full border rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Guardar Disponibilidad
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'AvailabilityForm',
    data() {
      return {
        availability: {
          date: '',
          start: '',
          end: '',
        },
      };
    },
    methods: {
      submitAvailability() {
        console.log('Disponibilidad guardada:', this.availability);
        alert('Disponibilidad actualizada correctamente');
      },
    },
  };
  </script>
  
  <style scoped>
  label {
    color: #154485;
  }
  </style>
  