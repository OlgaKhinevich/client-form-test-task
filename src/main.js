import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
}).$mount('#app')
