import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import VueResource from 'vue-resource'

Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App)
})
