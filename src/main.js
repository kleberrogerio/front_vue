import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-ivory-gopher-e2fm86kf.ws-us23.gitpod.io/spring-loja'
                        
axios.interceptors.request.use(config => {
  console.log(store)
  if(store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
})
axios.interceptors.response.use(res => {
    return res
  }, error => {
    if(error.response.status === 403) {
      alert('Não autorizado!')
    }
    else if (error.response.status === 401) {
      alert('Usuario/E-mail já cadastrado! Faça o login novamente e utilize um Usuario/E-mail válido!!')
      store.commit('logout')
      router.push('/login')
    }
    throw error
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')