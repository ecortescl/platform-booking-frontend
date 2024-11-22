<template>
    <div class="space-y-4">
      <div class="text-center">
        <h3 class="text-lg font-bold">Citas</h3>
        <p>Completadas: {{ stats.completed }}</p>
        <p>Canceladas: {{ stats.canceled }}</p>
        <p>Reprogramadas: {{ stats.rescheduled }}</p>
      </div>
      <div class="text-center">
        <h3 class="text-lg font-bold">Reseñas</h3>
        <p>Calificación promedio: {{ stats.averageRating }} / 5</p>
        <p>Comentarios recibidos: {{ stats.totalReviews }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatisticsPanel',
    data() {
      return {
        stats: {
          completed: 120,
          canceled: 10,
          rescheduled: 5,
          averageRating: 4.8,
          totalReviews: 25,
        },
      };
    },
  };
  </script>
  
  <style scoped>
  h3 {
    color: #154485;
  }
  </style>
  