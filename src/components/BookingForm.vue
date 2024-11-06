<template>
    <div class="booking-form bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Reserva tu Cita</h2>
      
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Selecciona un Profesional</h3>
        <select v-model="selectedProfessionalId" @change="cargarDisponibilidad" class="w-full p-2 border rounded-lg">
          <option v-for="profesional in profesionales" :key="profesional.id" :value="profesional.id">
            {{ profesional.nombre }}
          </option>
        </select>
      </div>
  
      <div class="availability mb-6" v-if="selectedProfessional">
        <h3 class="text-xl font-semibold mb-2">Disponibilidad de {{ selectedProfessional.nombre }}</h3>
        <ul class="space-y-2">
          <li v-for="horario in disponibilidadFiltrada" :key="horario.id" class="flex justify-between items-center p-2 border rounded-lg">
            <span>{{ horario.fecha }} - {{ horario.horaInicio }} a {{ horario.horaFin }}</span>
            <button @click="seleccionarHorario(horario)" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Seleccionar</button>
          </li>
        </ul>
        <p v-if="disponibilidadFiltrada.length === 0" class="text-red-500 mt-4">No hay disponibilidad para mostrar.</p>
      </div>
  
      <form v-if="horarioSeleccionado" @submit.prevent="confirmarReserva" class="space-y-4">
        <h3 class="text-xl font-semibold mb-2">Confirmar Reserva</h3>
        <p>Fecha: {{ horarioSeleccionado.fecha }}</p>
        <p>Hora: {{ horarioSeleccionado.horaInicio }} - {{ horarioSeleccionado.horaFin }}</p>
        <input v-model="nombre" type="text" placeholder="Nombre" required class="w-full p-2 border rounded-lg" />
        <input v-model="correo" type="email" placeholder="Correo Electrónico" required class="w-full p-2 border rounded-lg" />
        <textarea v-model="motivo" placeholder="Motivo de la Consulta" required class="w-full p-2 border rounded-lg"></textarea>
        <button type="submit" class="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Reservar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profesionales: [],
        selectedProfessionalId: null,
        selectedProfessional: null,
        disponibilidad: [],
        horarioSeleccionado: null,
        nombre: '',
        correo: '',
        motivo: ''
      };
    },
    computed: {
      disponibilidadFiltrada() {
        return this.disponibilidad.filter(horario => horario.profesionalId === this.selectedProfessionalId);
      }
    },
    created() {
      this.cargarProfesionales();
    },
    methods: {
      async cargarProfesionales() {
        try {
          const response = await fetch('http://localhost:3000/profesionales');
          if (!response.ok) {
            throw new Error('Error al obtener los profesionales');
          }
          const data = await response.json();
          this.profesionales = data;
        } catch (error) {
          console.error('Error al obtener los profesionales:', error);
        }
      },
      async cargarDisponibilidad() {
        try {
          const response = await fetch('http://localhost:3000/disponibilidad');
          if (!response.ok) {
            throw new Error('Error al obtener la disponibilidad');
          }
          const data = await response.json();
          this.disponibilidad = data;
          this.selectedProfessional = this.profesionales.find(prof => prof.id === this.selectedProfessionalId);
        } catch (error) {
          console.error('Error al obtener la disponibilidad:', error);
        }
      },
      seleccionarHorario(horario) {
        this.horarioSeleccionado = horario;
      },
      async confirmarReserva() {
        if (!this.nombre || !this.correo || !this.motivo) {
          alert('Por favor, complete todos los campos.');
          return;
        }
  
        try {
          const reserva = {
            nombre: this.nombre,
            correo: this.correo,
            motivo: this.motivo,
            fecha: this.horarioSeleccionado.fecha,
            horaInicio: this.horarioSeleccionado.horaInicio,
            horaFin: this.horarioSeleccionado.horaFin
          };
  
          const response = await fetch('http://localhost:3000/reservas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reserva)
          });
  
          if (!response.ok) {
            throw new Error('Error al confirmar la reserva');
          }
  
          alert('Reserva confirmada!');
          this.resetForm();
        } catch (error) {
          console.error('Error al confirmar la reserva:', error);
          alert('Hubo un error al confirmar la reserva. Por favor, inténtelo de nuevo.');
        }
      },
      resetForm() {
        this.horarioSeleccionado = null;
        this.nombre = '';
        this.correo = '';
        this.motivo = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .booking-form {
    max-width: 600px;
    margin: auto;
  }
  </style>