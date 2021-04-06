<template>
  <div class="item d-flex">
    <div class="wrap-checkbox d-flex flex-align-i-center">
      <input :checked="selected" @click="handleChecked" type="checkbox" />
    </div>
    <div class="wrap-name d-flex flex-align-i-center">
      <img class="image" :src="getLinkImage(product.image)" alt="product" />
      <p class="name font-weight-bold">{{ product.name }}</p>
    </div>
    <div class="wrap-number d-flex flex-align-i-center flex-jus-c-center">
      <comp-counter :id="product.id" :num="product.num" />
    </div>
    <div class="wrap-total d-flex flex-align-i-center flex-jus-c-center">
      {{ totalForEveryProduct }}
    </div>
  </div>
</template>

<script>
import CompCounter from "./CompCounter.vue";
export default {
  name: "item-product",
  components: {
    CompCounter,
  },
  props: {
    product: Object,
    selected: Boolean,
  },
  computed: {
    totalForEveryProduct() {
      return `${this.product.price * this.product.num}$`;
    },
  },
  methods: {
    getLinkImage(imageName) {
      return require(`../../assets/img/${imageName}`);
    },
    handleChecked() {
      this.$emit("click", this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/cart/ItemProduct.scss";
</style>
