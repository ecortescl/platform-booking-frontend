import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Forgotpass from '../views/Forgotpass.vue';
import Register from '../views/Register.vue';
import ProfessionalDetail from '../views/ProfessionalDetail.vue';
import Reserve from '../views/Reserve.vue'; // Importa el nuevo componente

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/about', component: About },
  { path: '/forgotpass', component: Forgotpass },
  { path: '/register', component: Register },
  { path: '/professional/:id', component: ProfessionalDetail, props: true },
  { path: '/reserve', component: Reserve }, // Nueva ruta para Reserve.vue
  // Agrega más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;