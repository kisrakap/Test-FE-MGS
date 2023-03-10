import { createRouter, createWebHistory } from 'vue-router'
import Loginpage from '../views/Login.vue'
import Notfoundpage from '../views/Notfoundpage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Loginpage
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import( '../views/Homepage.vue')
  },
  {
    path: '/supplier',
    name: 'supplier',
    component: () => import( '../views/Supplier.vue')
  },
  {
    path: '/addbarang',
    name: 'addbarang',
    component: () => import( '../views/CreateBarang.vue')
  },
  {
    path: '/editbarang/:id',
    name: 'editbarang',
    component: () => import( '../views/EditBarang.vue')
  },
  {
    path: '/addsupplier',
    name: 'addsuuplier',
    component: () => import( '../views/CreateSupplier.vue')
  },
  {
    path: '/editsupplier/:id',
    name: 'editsupplier',
    component: () => import( '../views/EditSupplier.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Notfoundpage',
    component: Notfoundpage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
