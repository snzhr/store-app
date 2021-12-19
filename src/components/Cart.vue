<template>
  <div class="cart-items">
    <div v-if="cart.length !== 0" class="items">
      <div class="cart-item" v-for="item in cart" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }} som</p>
        <span>{{ item.qt }} pcs</span>
        <button @click="removeItem(item)">Delete</button>
      </div>
    </div>
    <!-- Empty cart -->
    <div v-else class="empty-cart">
      <h3>Your cart is empty</h3>
    </div>
    <!-- Cart total -->
    <div v-if="cart.length !== 0" class="cart-total">
      <p>Total: {{ getCartTotal }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["cart", "cartTotal"]),
    ...mapGetters(["getCartTotal"]),
  },
  methods: {
    ...mapActions(["removeItem"]),
  },
};
</script>

<style scoped>
.cart-items {
  position: absolute;
  border: 1px solid cadetblue;
  background-color: darkslategrey;
  right: 0;
  top: 3.1em;
  width: 20em;
  padding: 0.5em;
  text-align: center;
}
.cart-item {
  background-color: cadetblue;
  height: auto;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4em;
}
</style>