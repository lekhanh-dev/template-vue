import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listImage: ["banner1.png", "banner2.png", "banner3.png"],
    products: [
      {
        id: new Date().getTime(),
        image: "",
        name: "Iphone 12",
        count: 2,
        price: "3000$",
      },
      {
        id: new Date().getTime() + 1,
        image: "",
        name: "Iphone 13",
        count: 1,
        price: "6000$",
      },
      {
        id: new Date().getTime() + 2,
        image: "",
        name: "Iphone 14",
        count: 1,
        price: "9000$",
      },
      {
        id: new Date().getTime() + 3,
        image: "",
        name: "Iphone 15",
        count: 1,
        price: "12000$",
      },
    ],
    cart: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
