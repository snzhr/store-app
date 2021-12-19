import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, title: "Jacket", price: 2455, qt: 1 },
      { id: 2, title: "Suit", price: 1255, qt: 1 },
      { id: 3, title: "Cap", price: 350, qt: 1 },
      { id: 4, title: "Shoes", price: 1295, qt: 1 },
      { id: 5, title: "Adidas boots", price: 4135, qt: 1 },
      { id: 6, title: "Nike trousers", price: 1500, qt: 1 },
    ],
    cart: [],
    cartTotal: 0
  },
  mutations: {
    ADD_TO_CART(state, payload){
      const cartItem = Object.assign({},  payload)
      let productInCart = state.cart.find(item => {
        return item.id === cartItem.id
      })
      if (!productInCart) {
        state.cart.push(cartItem)        
      } else {
        productInCart.qt++
      }
    },
    REMOVE_ITEM(state, item){
      state.cart.splice(state.cart.indexOf(item), 1)
    },


    INCREMENT_QUANTITY(state, payload){
        payload.qt++
    },
    DECREMENT_QUANTITY(state, payload){
      payload.qt--
  }

  },
  actions: {
    addToCart(context, payload){
      context.commit('ADD_TO_CART', payload)
    },
    removeItem({commit}, payload){
      commit("REMOVE_ITEM", payload)
    },
    incrementQt({commit}, payload){
      commit("INCREMENT_QUANTITY", payload)
    },
    decrementQt({commit}, payload){
      commit("DECREMENT_QUANTITY", payload)
    }
  },
  getters:{
    getCartTotal(state){
      return state.cart.reduce((acc,item)=>{
        return acc+=item.price*item.qt
      },0)
    }
  },
  modules: {
  }
})
