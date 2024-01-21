import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import LoginView from '../views/login/LoginView.vue'
import BrandView from '../views/BrandView.vue'
import BrandPop from '../views/purchase/BrandPop.vue'
import FeedbackView from '../views/FeedbackView.vue'
import SearchStoreView from '@/views/purchase/SearchStore.vue'
import StoreMenuView from '@/views/store/StoreMenu.vue'
import ShoppingCartView from '@/views/purchase/ShoppingCart.vue'
import PersonalView from '@/views/member/MemberCenter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView
    },
    {
      path: '/brand',
      name: 'brand',
      component: BrandView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/searchStore',
      name: 'searchStore',
      component: SearchStoreView
    },
    {
      path: '/storeMenu',
      name: 'storeMenu',
      component: StoreMenuView
    },
    {
      path: '/brandPop',
      name: 'brandPop',
      component: BrandPop
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCartView
    },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalView
    }
  ]
})

export default router
