<template
  ><section class="list-product">
    <div class="container d-flex flex-wrap">
      <product-card
        v-for="item in getAllProduct"
        :key="item.id"
        :product="item"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "list-product",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["getAllProduct"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/product/ListProduct.scss";
</style>
