import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Forgotpass from '../views/Forgotpass.vue';
import Register from '../views/Register.vue';
import ProfessionalDetail from '../components/ProfessionalDetail.vue';
import Reserve from '../views/Reserve.vue'; 

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/about', component: About },
  { path: '/forgotpass', component: Forgotpass },
  { path: '/register', component: Register },
  { path: '/reserve', name: 'reserva', component: Reserve }, // Nueva ruta para Reserve.vue con nombre
  // Agrega más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;