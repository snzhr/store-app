<template>
  <div class="cart-block">
    <div class="items__in__cart">
      <div class="item__block" v-for="item in cart" :key="item.id">
        <div class="item__in__cart">
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }}</p>
          <p>
            <button class="cart__btns" @click="decrementQt(item)">-</button>
            {{ item.qt }}
            <button class="cart__btns" @click="incrementQt(item)">+</button>
          </p>
        </div>
        <!-- Delete button -->
        <div><button @click="removeItem(item)">Delete item</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapActions(["removeItem", "incrementQt", "decrementQt"]),
  },
};
</script>

<style scoped>
.items__in__cart {
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
</style>