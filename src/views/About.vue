<template>
  <div class="professional-details">
    <ProfessionalSearch @search="handleSearch" />
    <div class="professional-info">
      <h2>{{ profesional.nombre }}</h2>
      <p><strong>Especialidades:</strong> {{ profesional.especialidades.join(', ') }}</p>
      <p><strong>Experiencia:</strong> {{ profesional.experiencia }} años</p>
      <p><strong>Contacto:</strong> {{ profesional.contacto }}</p>
      <h3>Reseñas y Calificaciones</h3>
      <ul>
        <li v-for="reseña in profesional.reseñas" :key="reseña.id">
          {{ reseña.usuario }}: {{ reseña.comentario }} ({{ reseña.calificacion }} estrellas)
        </li>
      </ul>
      <button @click="reservarCita">Reservar Cita</button>
    </div>
  </div>
</template>

<script>
import ProfessionalSearch from '../components/ProfessionalSearch.vue';

export default {
  components: {
    ProfessionalSearch
  },
  data() {
    return {
      profesional: {
        nombre: 'Dr. Juan Pérez',
        especialidades: ['Cardiología', 'Medicina Interna'],
        experiencia: 10,
        contacto: 'juan.perez@ejemplo.com',
        reseñas: [
          { id: 1, usuario: 'Ana', comentario: 'Excelente atención', calificacion: 5 },
          { id: 2, usuario: 'Carlos', comentario: 'Muy profesional', calificacion: 4 }
        ]
      }
    };
  },
  methods: {
    reservarCita() {
      this.$router.push(`/reservar/${this.profesional.nombre}`);
    }
  }
};
</script>

<style scoped>
.professional-details {
  padding: 20px;
  text-align: center;
}

.professional-info {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>