<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="cart" @click="isShown = !isShown">
      Cart ({{ cart.length }} items)
    </div>
    <Cart v-if="isShown" />
  </div>
</template>

<script>
import Cart from "./Cart.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isShown: false,
    };
  },
  components: {
    Cart,
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: darkslategrey;
  padding: 1em 2em;
  color: white;
}
.cart {
  cursor: pointer;
}
#nav {
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: goldenrod;
}
</style>