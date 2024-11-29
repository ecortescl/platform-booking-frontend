import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Forgotpass from '../views/Forgotpass.vue';
import Register from '../views/Register.vue';
import Reserve from '../views/Reserve.vue';
import BookingForm from '../components/BookingForm.vue'; // Cambiada la ruta a components
import AdminHome from '../views/AdminHome.vue';
import ProHome from '../views/ProHome.vue';
import ProView from '../views/ProView.vue';
import SucView from '../views/SucView.vue';
import SupportView from '../views/SupportView.vue';
import MyReservations from '../views/MyReservations.vue';
import Book from '../views/Book.vue';
import EditProfile from '../views/EditProfile.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/about', component: About },
  { path: '/forgotpass', component: Forgotpass },
  { path: '/register', component: Register },
  { path: '/reserve', name: 'reserva', component: Reserve },
  { path: '/booking', name: 'booking', component: BookingForm },
  { path: '/adminhome', component: AdminHome },
  { path: '/prohome', name: 'prohome', component: ProHome },
  { path: '/pro', name: 'pro', component: ProView },
  { path: '/suc', name: 'suc', component: SucView },
  { path: '/support', name: 'support', component: SupportView },
  { path: '/myreservations', name: 'myreservations', component: MyReservations },
  { path: '/book', name: 'book', component: Book },
  { path: '/editprofile', name: 'editprofile', component: EditProfile }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  }
});

export default router;