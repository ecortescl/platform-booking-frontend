<template>
    <div class="relative">
      <swiper-container
        :pagination="{ clickable: true }"
        :navigation="true"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <div class="relative h-96">
            <img :src="image.src" alt="Carrusel" class="w-full h-full object-cover rounded-md" />
            <div class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 text-overlay">
              {{ image.text }}
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </template>
  
  <script>
  import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    components: {
      SwiperContainer,
      SwiperSlide,
    },
    data() {
      return {
        images: [
          { src: 'https://www.lofwork.cl/wp-content/uploads/2024/07/Sociedad-de-profesionales.jpg', text: 'Transforma tu visión en realidad con nuestros profesionales.' },
          { src: 'https://st.depositphotos.com/1594308/5155/i/600/depositphotos_51557017-stock-photo-business-partners-discussing-data-in.jpg', text: 'Impulsa tu proyecto con las mentes más brillantes del sector.' },
          { src: 'https://img.freepik.com/foto-gratis/dos-mujeres-ayudando-hombre-proyecto_23-2147808032.jpg?w=1060&t=st=1729227243~exp=1729227843~hmac=d3641fd746fdd5fe5f97320ddfa4b0f15e551b81d2307caf3d210377476367a0', text: 'Expertos en su campo, listos para ayudarte a brillar.' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .mySwiper {
    width: 100%;
    height: 384px;
  }
  
  .text-overlay {
    font-family: 'Lobster', cursive;
    font-weight: 400;
  }
  </style>
  