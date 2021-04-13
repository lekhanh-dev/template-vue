import Vue from "vue";
import Vuex from "vuex";
import { getBanner, getProduct, getCart, updateCart } from "../api";

Vue.use(Vuex);

const state = {
  banners: [],
  users: [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Alice",
    },
    {
      id: 3,
      name: "Mark",
    },
  ],
  products: [],
  cart: {},
  loading: false,
  alert: { open: false, message: "Hello world" },
};

const getters = {
  getNumById: (state) => (id) => {
    const num = state.cart.products.find((item) => item.id === id).num;
    if (num) {
      return num;
    } else {
      return 0;
    }
  },
  getPriceById: (state) => (id) => {
    const price = state.products.find((item) => item.id === id).price;
    if (price) {
      return price;
    } else {
      return 0;
    }
  },
  getAllProductInCart: (state) => {
    if (state.cart && state.products.length > 0) {
      return state.cart.products.map((item) => ({
        ...state.products.find((p) => p.id === item.id),
        num: item.num,
      }));
    } else {
      return [];
    }
  },
};

const actions = {
  increment({ commit, state }, id) {
    commit("loadingUi", true);
    const cart = JSON.parse(JSON.stringify(state.cart));
    const product = cart.products.find((item) => item.id === id);
    if (product) {
      product.num++;
    }
    updateCart(cart).then((data) => {
      commit("getCart", data);
      commit("loadingUi", false);
    });
  },
  decrease({ commit, state }, id) {
    commit("loadingUi", true);
    const cart = JSON.parse(JSON.stringify(state.cart));
    const product = cart.products.find((item) => item.id === id);
    if (product) {
      product.num--;
      if (product.num > 0) {
        updateCart(cart).then((data) => {
          commit("getCart", data);
          commit("loadingUi", false);
        });
      } else {
        const productInCart = state.cart.products.filter(
          (item) => !(item.id === id)
        );
        updateCart({ ...state.cart, products: productInCart }).then((data) => {
          commit("getCart", data);
          commit("loadingUi", false);
        });
      }
    } else {
      commit("loadingUi", false);
    }
  },
  addToCart({ commit }, id) {
    commit("loadingUi", true);
    getCart().then((data) => {
      const item = data.products.find((item) => item.id === id);
      if (item) {
        commit("getCart", data);
        commit("loadingUi", false);
        commit("updateAlert", {
          open: true,
          message: "Product already have in cart",
        });
      } else {
        data.products.push({ id: id, num: 1 });
        updateCart(data).then(() => {
          commit("getCart", data);
          commit("loadingUi", false);
          commit("updateAlert", {
            open: true,
            message: "Product added successful",
          });
        });
      }
    });
  },
  getCart({ commit }) {
    getCart().then((data) => {
      commit("getCart", data);
    });
  },
  handleAlert({ commit }, payload) {
    commit("updateAlert", payload);
  },
  deleteInCart({ commit, state }, products) {
    commit("loadingUi", true);
    const productInCart = state.cart.products.filter(
      (item) => !products.some((value) => value.id === item.id)
    );
    updateCart({ ...state.cart, products: productInCart }).then((data) => {
      commit("getCart", data);
      commit("loadingUi", false);
    });
  },
  getBanner({ commit }) {
    getBanner().then((data) => {
      commit("getBanner", data);
    });
  },
  getProduct({ commit }) {
    return getProduct().then((data) => {
      commit("getProduct", data);
    });
  },
};

const mutations = {
  updateAlert(state, payload) {
    state.alert = payload;
  },
  loadingUi(state, loading) {
    state.loading = loading;
  },
  getBanner(state, payload) {
    state.banners = payload;
  },
  getProduct(state, payload) {
    state.products = payload;
  },
  getCart(state, payload) {
    state.cart = payload;
  },
};

export default new Vuex.Store({
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});
