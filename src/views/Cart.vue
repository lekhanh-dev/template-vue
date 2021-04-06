<template>
  <div class="my-cart">
    <comp-header />
    <comp-cart />
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "../components/CompHeader.vue";
import CompFooter from "../components/CompFooter.vue";
import CompCart from "../components/cart/CompCart.vue";
export default {
  components: { CompCart, CompHeader, CompFooter },
  name: "Cart",
};
</script>
