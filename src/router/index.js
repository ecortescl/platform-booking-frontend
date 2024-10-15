import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Forgotpass from '../views/Forgotpass.vue'
import Register from '../views/Register.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/About', component: About },
  { path: '/Forgotpass', component: Forgotpass },
  { path: '/Register', component: Register },
  // Agrega más rutas aquí según sea necesario
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router