import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: Index,
    children: [{
      path: '/goods',
      name: 'Goods',
      component: () => import('../views/Goods.vue'),
    }, {
      path: '/evaluate',
      name: 'Evaluate',
      component: () => import('../views/Evaluate.vue'),
    }, {
      path: '/business',
      name: 'Business',
      component: () => import('../views/Business.vue'),
    }]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router