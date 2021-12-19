<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <h3>{{ product.title }}</h3>
      <p>{{ product.price }}</p>
      <button @click="addToCart(product)" class="add">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["addToCart"]),
  },
};
</script>

<style scoped>
.products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.product {
  background-color: lightseagreen;
  color: white;
  width: 25%;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
}
.add {
  background-color: gainsboro;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em;
  cursor: pointer;
}
</style>