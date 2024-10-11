import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  // Agrega más rutas aquí según sea necesario
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router