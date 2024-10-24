import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Forgotpass from '../views/Forgotpass.vue';
import Register from '../views/Register.vue';
import Professionals from '../views/Professionals.vue'; // Importa la nueva página

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/about', component: About }, 
  { path: '/forgotpass', component: Forgotpass }, 
  { path: '/register', component: Register }, 
  { path: '/professionals', component: Professionals } // Ajusta la ruta a minúsculas
  // Agrega más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
