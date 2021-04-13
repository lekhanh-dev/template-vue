<template>
  <div class="item d-flex">
    <div class="wrap-checkbox d-flex flex-align-i-center">
      <input
        :checked="selected"
        @change="handleChecked($event.target.checked)"
        type="checkbox"
      />
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
import { linkImage } from "../../config";
export default {
  name: "item-product",
  components: {
    CompCounter,
  },
  props: {
    product: Object,
    selected: Boolean,
    value: Object,
  },
  computed: {
    totalForEveryProduct() {
      return `${this.product.price * this.product.num}$`;
    },
  },
  methods: {
    getLinkImage(imageName) {
      let link = linkImage;
      return require(`@/${link}/${imageName}`);
    },
    handleChecked(e) {
      const payload = {
        id: this.product.id,
        selected: e,
      };
      this.$emit("input", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/cart/ItemProduct.scss";
input[type="checkbox"] {
  transform: scale(1.5);
}
</style>
