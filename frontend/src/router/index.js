import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Signup from '../components/Signup.vue' ;
import Login from '../components/Login.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  
 
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
 


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
