import Vue from 'vue'
import App from './App'
import store from './store'
// Import the filter and initiate as a filter
import { currency } from './validators/currency'
Vue.filter('currency', currency)

new Vue({
  // This will be called whenever an id '#app' encounters
  el: '#app',
  // Attach store to control states of the application
  store,
  // This will be the home page App.vue
  render: h => h(App)
})
