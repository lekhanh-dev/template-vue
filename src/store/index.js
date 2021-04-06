import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listImage: ["banner1.png", "banner2.png", "banner3.png"],
    products: [
      {
        id: 1,
        image: "product1.png",
        name: "Iphone 12 Pro Max",
        price: 3000,
      },
      {
        id: 2,
        image: "product2.png",
        name: "Iphone 13",
        price: 6000,
      },
      {
        id: 3,
        image: "product3.png",
        name: "Iphone 14",
        price: 9000,
      },
      {
        id: 4,
        image: "product4.png",
        name: "Iphone 15",
        price: 12000,
      },
      {
        id: 5,
        image: "product4.png",
        name: "Iphone 16",
        price: 24000,
      },
    ],
    cart: [
      { idProduct: 1, num: 3 },
      { idProduct: 3, num: 5 },
      { idProduct: 5, num: 10 },
    ],
  },
  getters: {
    getNumById: (state) => (id) => {
      return state.cart.find((item) => item.idProduct === id).num;
    },
    getPriceById: (state) => (id) => {
      return state.products.find((item) => item.id === id).price;
    },
    getAllProductInCart: (state) => {
      let listProduct = [];
      state.products.forEach((product) => {
        state.cart.forEach((element) => {
          if (element.idProduct === product.id) {
            listProduct.push({ ...product, num: element.num });
          }
        });
      });
      return listProduct;
    },
  },
  mutations: {
    increment(state, id) {
      let product = state.cart.find((item) => item.idProduct === id);
      product.num++;
    },
    decrease(state, id) {
      let product = state.cart.find((item) => item.idProduct === id);
      if (product.num !== 1) {
        product.num--;
      }
    },
    deleteInCart(state, listId) {
      listId.forEach((id) => {
        let index = state.cart.findIndex((item) => item.idProduct === id);
        state.cart.splice(index, 1);
      });
    },
  },
  actions: {
    increment({ commit }, id) {
      commit("increment", id);
    },
    decrease({ commit }, id) {
      commit("decrease", id);
    },
    deleteInCart({ commit }, listId) {
      commit("deleteInCart", listId);
    },
  },
});
