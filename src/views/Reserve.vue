<template>
  <div class="mt-16">
    <BookingForm :professional="professional" />
  </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue';

export default {
  components: {
    BookingForm
  },
  computed: {
    professional() {
      return this.$route.params.professional;
    }
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>