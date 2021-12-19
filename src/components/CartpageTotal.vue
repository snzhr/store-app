<template>
  <div class="cartpage__total">
    <h1>Total: {{ $store.getters.getCartTotal }} som</h1>
    <button @click="$router.push('/checkout')">Go to checkout</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cartpage__total {
  background-color: darkslategray;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 0.5em;
  text-align: right;
}
</style>