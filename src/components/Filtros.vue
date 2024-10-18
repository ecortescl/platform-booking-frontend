<template>
  <div class="filters">
    <label for="specialty">Especialidad:</label>
    <select v-model="selectedSpecialty" @change="applyFilters">
      <option value="">Todas</option>
      <option v-for="specialty in specialties" :key="specialty" :value="specialty">{{ specialty }}</option>
    </select>

    <label for="location">Ubicación:</label>
    <select v-model="selectedLocation" @change="applyFilters">
      <option value="">Todas</option>
      <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
    </select>

    <label for="availability">Disponibilidad:</label>
    <input type="date" v-model="selectedAvailability" @change="applyFilters" />
  </div>
</template>

<script>
export default {
  props: {
    specialties: {
      type: Array,
      required: true,
    },
    locations: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedSpecialty: '',
      selectedLocation: '',
      selectedAvailability: '',
    };
  },
  methods: {
    applyFilters() {
      this.$emit('filter', {
        specialty: this.selectedSpecialty,
        location: this.selectedLocation,
        availability: this.selectedAvailability,
      });
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

select, input[type="date"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
