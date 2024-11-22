import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Forgotpass from '../views/Forgotpass.vue';
import Register from '../views/Register.vue';
import ProfessionalDetail from '../components/ProfessionalDetail.vue';
import Reserve from '../views/Reserve.vue';
import BookingForm from '../components/BookingForm.vue';
import ProHome from '../views/ProHome.vue';
import AdminHome from '../views/AdminHome.vue';
import ProView from '../views/ProView.vue';
import SucView from '../views/SucView.vue';
import SupportView from '../views/SupportView.vue';

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
  { path: '/support', name: 'support', component: SupportView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  }
});

export default router;