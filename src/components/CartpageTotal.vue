<template>
  <div class="cartpage__total">
    <h1>Total: {{ $store.getters.getCartTotal }}</h1>
    <button>Go to checkout</button>
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
  padding: 2em;
  text-align: right;
}
</style>