<template>
  <div class="product-item">
    <div class="product-image d-flex flex-jus-c-center">
      <img :src="getLinkImage(product.image)" alt="product" />
    </div>
    <div class="product-name">{{ product.name }}</div>
    <div class="label d-flex flex-jus-c-space-between flex-align-i-center">
      <div class="price">{{ product.price }}$</div>
      <button class="btn btn-add" @click="addToCart(product.id)">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  methods: {
    ...mapActions({
      addToCart: "addToCart",
    }),
    getLinkImage(imageName) {
      return require(`../../assets/img/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/product/ProductCard.scss";
</style>
