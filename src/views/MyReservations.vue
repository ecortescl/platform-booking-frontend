<template>
  <div class="reservations-container">
    <h1>Mis Reservas</h1>
    <div class="reservations-list">
      <div class="reservation-card" v-for="reservation in reservations" :key="reservation.id">
        <div class="reservation-details">
          <div class="reservation-info">
            <h2>Reserva #{{ reservation.id }}</h2>
            <p><strong>Fecha:</strong> {{ reservation.date }}</p>
            <p><strong>Hora:</strong> {{ reservation.time }}</p>
            <p><strong>Profesional:</strong> {{ reservation.professionalName }}</p>
          </div>
          <button @click="modifyReservation(reservation.id)" class="modify-button">Modificar Reserva</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservations: [
        // Ejemplo de datos de reserva
        { id: 1, date: '2023-10-01', time: '18:00', professionalName: 'Juan Pérez' },
        { id: 2, date: '2023-10-01', time: '18:00', professionalName: 'Juan Pérez' },
        { id: 3, date: '2023-10-02', time: '19:00', professionalName: 'María López' },
        // Agrega más reservas según sea necesario
      ]
    };
  },
  methods: {
    modifyReservation(id) {
      // Redireccionar a reserve.vue con el ID de la reserva
      this.$router.push({ name: 'reserva', params: { id } });
    }
  }
};
</script>

<style>
.reservations-container {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.reservations-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reservation-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.reservation-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reservation-info {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reservation-card h2 {
  margin-top: 0;
  color: #007bff;
}

.reservation-card p {
  margin: 5px 0;
}

.modify-button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.modify-button:hover {
  background: #0056b3;
}
</style>