// This will be called when a 'store' instance is imported
import Vue from 'vue'
import Vuex from 'vuex'
// Have seperate files for 'actions' and 'getters'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
// Setup vuex for state management
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  },
  strict: debug,
})
