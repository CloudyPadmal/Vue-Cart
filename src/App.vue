// This will be the home page of the application
<template>
  <!-- // 'app' id will be an identifier to the main.js to run the Vue script -->
  <div id="app">
    <h1>Shopping Cart</h1>
    <hr />
    <!-- // ProductList component -->
    <product-list/>
    <hr />
    <!-- // Cart component -->
    <cart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'

export default {
  // Whoever imports App.vue will get components
  // Functional parts are implemented seperately in each component
  components: { ProductList, Cart }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
