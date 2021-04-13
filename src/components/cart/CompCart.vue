<template>
  <section>
    <div class="cart container">
      <div class="cart__table">
        <div class="header d-flex">
          <div class="wrap-checkbox d-flex flex-align-i-center">
            <input
              :checked="selectedAll"
              type="checkbox"
              @click="handleAllChecked($event.target.checked)"
            />
          </div>
          <div class="wrap-name d-flex flex-align-i-center">Name</div>
          <div class="wrap-number d-flex flex-align-i-center flex-jus-c-center">
            Number
          </div>
          <div class="wrap-total d-flex flex-align-i-center flex-jus-c-center">
            Total
          </div>
        </div>
        <item-product
          v-for="item in getAllProductInCart"
          :key="item.id"
          :product="item"
          :selected="getSelectedById(item.id)"
          @input="handleChecked"
        />
        <div class="footer d-flex flex-jus-c-space-between flex-align-i-center">
          <div>Total product selected: {{ numProductSelected }} Product</div>
          <button class="btn btn-delete" @click="deleteProduct">Delete</button>
        </div>
      </div>
      <div class="cart__none-product"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ItemProduct from "./ItemProduct.vue";
export default {
  name: "comp-cart",
  components: {
    ItemProduct,
  },
  data() {
    return {
      listProductStatus: [],
      numProductSelected: 0,
    };
  },
  created() {
    this.getProduct().then(() => {
      this.listProductStatus = this.getAllProductInCart.map((item) => {
        return { id: item.id, selected: false };
      });
    });
  },
  methods: {
    handleChecked(payload) {
      let product = this.listProductStatus.find(
        (item) => item.id === payload.id
      );
      product.selected = !product.selected;
      if (product.selected) {
        this.numProductSelected++;
      } else {
        this.numProductSelected--;
      }
    },
    getSelectedById(id) {
      const item = this.listProductStatus.find((item) => item.id === id);
      if (item) {
        return item.selected;
      } else {
        return false;
      }
    },
    handleAllChecked(checked) {
      this.listProductStatus = this.listProductStatus.map((item) => ({
        ...item,
        selected: checked,
      }));
      this.numProductSelected = checked ? this.listProductStatus.length : 0;
    },
    ...mapActions({
      deleteInCart: "deleteInCart",
      getProduct: "getProduct",
      handleAlert: "handleAlert",
    }),
    deleteProduct() {
      if (!this.numProductSelected) {
        this.handleAlert({
          open: true,
          message: "You must select at least one product",
        });
      } else {
        const products = this.listProductStatus.filter((item) => item.selected);
        this.deleteInCart(products);
        this.numProductSelected = 0;
        this.listProductStatus = this.listProductStatus.filter(
          (item) => !item.selected
        );
      }
    },
  },
  computed: {
    ...mapGetters(["getAllProductInCart"]),
    selectedAll() {
      return !this.listProductStatus.find((item) => !item.selected);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/components/cart/CompCart.scss";
input[type="checkbox"] {
  transform: scale(1.5);
}
</style>
