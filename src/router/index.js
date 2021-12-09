import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/marca",
    name: "Marca",
    component: () => import("../views/Marca.vue")
  },
  {
    path: "/produto",
    name: "Produto",
    component: () => import("../views/Produto.vue"),
    beforeEnter: (to, from, next) => {
      if (from.name !== 'Marca') {
      next()
      } else {
      next(false)
      }
      }
      
  },
  {
    path: "/venda",
    name: "Venda",
    component: () => import("../views/Venda.vue")
  },
  {
    path: "/usuario",
    name: "Usuario",
    component: () => import("../views/Usuario.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (store.state.permiteNavegacao) {
    next()
  } else {
    next(false)
  }
  })

export default router
