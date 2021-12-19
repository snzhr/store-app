<template>
  <div class="checkout__block">
    <h1>Checkout</h1>
    <div class="checkout__details">
      <div class="checkout__form">Here is a form</div>
      <div class="cart__details">
        <div class="details">
          <div class="item_details" v-for="item in cart" :key="item.id">
            <h4>{{ item.title }}</h4>
            <p>
              {{ item.qt }} x {{ item.price }} = {{ item.qt * item.price }} som
            </p>
          </div>
          <hr />
          <h2>Total: {{ getCartTotal }} som</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getCartTotal"]),
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 1em 0;
}
.checkout__details {
  display: flex;
}
.checkout__form {
  width: 50%;
}

.item_details {
  margin: 1em 0;
  padding: 1em;
  border: 2px solid darkslategrey;
}
</style>