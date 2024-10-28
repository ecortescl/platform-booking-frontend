import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Forgotpass from '../views/Forgotpass.vue';
import Register from '../views/Register.vue';
import ProfessionalDetail from '../views/ProfessionalDetail.vue'; // Importa el nuevo componente

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/about', component: About }, // Cambié 'About' a 'about' para que sea más consistente
  { path: '/forgotpass', component: Forgotpass }, // Cambié 'Forgotpass' a 'forgotpass'
  { path: '/register', component: Register }, // Cambié 'Register' a 'register'
  { path: '/professional/:id', component: ProfessionalDetail, props: true }, // Nueva ruta dinámica
  // Agrega más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;