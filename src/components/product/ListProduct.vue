<template
  ><section class="list-product">
    <div class="container d-flex flex-wrap">
      <product-card
        v-for="item in $store.state.products"
        :key="item.id"
        :product="item"
      />
      <div
        v-show="$store.state.products.length === 0"
        v-for="(item, index) in new Array(6)"
        :key="new Date().getTime() + index"
        class="skeleton-item"
      >
        <div class="skeleton-image d-flex flex-jus-c-center">
          <div class="image"></div>
        </div>
        <div class="skeleton-name"></div>
        <div
          class="skeleton-label d-flex flex-jus-c-space-between flex-align-i-center"
        >
          <div class="skeleton-price"></div>
          <div class="skeleton-btn"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapActions } from "vuex";
export default {
  name: "list-product",
  components: {
    ProductCard,
  },
  methods: {
    ...mapActions(["getProduct"]),
  },
  mounted() {
    setTimeout(() => {
      this.getProduct();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/product/ListProduct.scss";
.skeleton-item {
  flex: 100%;
  box-shadow: 0px 0px 5px #c9c9c9;
  margin-bottom: 20px;
  margin-right: 0;
  @include media(map-get($breakpoint, "sm")) {
    flex: 0 0 calc(50% - 20px);
    margin-left: 20px;
  }

  @include media(map-get($breakpoint, "md")) {
    flex: 0 0 calc(33.33% - 20px);
  }
  @include media(map-get($breakpoint, "lg")) {
    flex: 0 0 calc(25% - 20px);
  }
  @include media(map-get($breakpoint, "xl")) {
    flex: 0 0 calc(20% - 20px);
  }
}
.skeleton-image {
  padding: 20px 0;
}
.image {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: rgba(130, 130, 130, 0.2);
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave 1s infinite ease-out;
}
.skeleton-name {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  height: 20px;
  border-radius: 5px;
  background: rgba(130, 130, 130, 0.2);
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave 1s infinite ease-out;
}
.skeleton-label {
  padding: 10px;
}
.skeleton-price {
  height: 20px;
  margin-left: 10px;
  width: 80px;
  border-radius: 5px;
  background: rgba(130, 130, 130, 0.2);
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave 1s infinite ease-out;
}
.skeleton-btn {
  height: 40px;
  width: 80px;
  margin-right: 10px;
  border-radius: 5px;
  background: rgba(130, 130, 130, 0.2);
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave 1s infinite ease-out;
}
@keyframes wave-square {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
