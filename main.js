import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
Vue.use(VueSession)
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/store'
library.add(faCoffee)
import router from './router'
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify)
new Vue({
  router,
  store,
  VueSession,
  render: h => h(App),
  // created(){
  //   window.addEventListener('beforeunload', this.handler)
  // },
  // methods:{
  //   handler: function handler(event) {
  //          localStorage.removeItem("currentUserSession")
  //   }
  // }
}).$mount('#app')
