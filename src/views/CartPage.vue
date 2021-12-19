<template>
  <div v-if="cart.length === 0" class="empty__cartpage">
    <h1>Your cart is empty</h1>
    <h3 @click="$router.push('/')">Go to homepage</h3>
  </div>
  <div v-else class="cart__block">
    <div class="items__in__cart">
      <div class="item__block" v-for="item in cart" :key="item.id">
        <div class="item__in__cart">
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }}</p>
          <p>
            <button class="cart__btns" @click="decrementQt(item)">-</button>
            <!-- <input type="number" v-model="item.qt" /> -->
            <span class="item__qt">{{ item.qt }}</span>
            <button class="cart__btns" @click="incrementQt(item)">+</button>
          </p>
        </div>
        <!-- Delete button -->
        <div><button @click="removeItem(item)">Delete item</button></div>
      </div>
    </div>
    <CartpageTotal />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CartpageTotal from "@/components/CartpageTotal.vue";
export default {
  components: {
    CartpageTotal,
  },
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapActions(["removeItem", "incrementQt", "decrementQt"]),
  },
};
</script>

<style scoped>
.empty__cartpage {
  margin: 10% 0;
  text-align: center;
}
.empty__cartpage h3 {
  text-decoration: underline;
  cursor: pointer;
}
.item__block {
  border: 2px solid darkslategrey;
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item__in__cart {
  height: 8em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.cart__btns {
  padding: 0.2em 0.4em;
  cursor: pointer;
}
.item__qt {
  margin: 0 1em;
}
</style>