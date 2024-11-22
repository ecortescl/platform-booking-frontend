<template>
    <div>
      <FullCalendar
        :plugins="[dayGridPlugin, interactionPlugin]"
        :initialView="'dayGridMonth'"
        :events="events"
        @dateClick="handleDateClick"
      />
    </div>
 </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  
  export default {
    name: 'Calendar',
    components: {
      FullCalendar,
    },
    data() {
      return {
        events: [
          { title: 'Cita con Juan', date: '2024-11-21', backgroundColor: '#28a745' },
          { title: 'Cita con Ana', date: '2024-11-22', backgroundColor: '#ffc107' },
        ],
      };
    },
    methods: {
      handleDateClick(info) {
        alert(`Fecha seleccionada: ${info.dateStr}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .fc-event {
    font-size: 0.9rem;
  }
  </style>
  