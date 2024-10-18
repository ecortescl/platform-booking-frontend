<template>
  <div class="flex flex-col p-4 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
    <!-- Campo de Especialidad -->
    <div>
      <label for="specialty" class="block mb-1 text-sm font-medium text-gray-700">Especialidad:</label>
      <input
        type="text"
        v-model="specialty"
        id="specialty"
        class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
    </div>

    <!-- Campo de Ubicación -->
    <div>
      <label for="location" class="block mb-1 text-sm font-medium text-gray-700">Ubicación:</label>
      <input
        type="text"
        v-model="location"
        id="location"
        class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
    </div>

    <!-- Campo de Disponibilidad -->
    <div>
      <label for="availability" class="block mb-1 text-sm font-medium text-gray-700">Disponibilidad:</label>
      <input
        type="date"
        v-model="availability"
        id="availability"
        class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
    </div>

    <!-- Botón de Buscar -->
    <button
      type="submit"
      class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
    >
      Buscar
    </button>
  </div>
</template>

<script>
export default {
  name: "Buscar",
  data() {
    return {
      specialty: "",
      location: "",
      availability: "",
    };
  },
};
</script>

<style scoped>
/* No es necesario agregar estilos adicionales con Tailwind, ya que todo se maneja con utilidades */
</style>
