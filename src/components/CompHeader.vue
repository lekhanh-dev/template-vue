<template>
  <header class="pos-sticky">
    <div class="top-area d-none d-xl-block bg-white-medium">
      <div
        class="container d-flex flex-jus-c-space-between flex-align-i-center text-grey"
      >
        <div class="d-flex flex-jus-c-space-between">
          <div class="top-area__location">
            <i class="fas fa-map-marker-alt"></i> 19th Ave News York, NY9582,USA
          </div>
          <div class="top-area__phone-number">
            <i class="fas fa-headphones-alt"></i> +1 916-85-2253
          </div>
        </div>
        <ul class="top-area__list-social-network d-flex">
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </li>
        </ul>
        <div class="d-flex flex-align-i-center">
          <ul class="top-area__list-action d-flex">
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Contact Us</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Sign in</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> More menu</a>
            </li>
          </ul>
          <button
            class="btn top-area__button border-rounded-low ff-source-san-pro bg-dark"
          >
            <a class="text-white ff-source-san-pro" href="#">Join Now</a>
          </button>
        </div>
      </div>
    </div>

    <div class="menu bg-white">
      <div
        class="container d-flex flex-jus-c-space-between flex-align-i-center"
      >
        <input class="d-none" type="checkbox" id="check" name="check" />
        <label
          class="menu__btn-open d-block d-xl-none pos-relative"
          for="check"
        >
        </label>
        <div class="menu__item pos-absolute pos-xl-static">
          <nav class="menu__nav-wrapper d-flex flex-dir-column flex-dir-xl-row">
            <ul
              class="menu__list-nav d-flex flex-dir-column flex-dir-xl-row ff-montserrat pos-relative"
            >
              <li class="font-weight-bold">
                <router-link to="/"> HOME </router-link>
              </li>
              <li class="font-weight-bold">
                <a href="#">PAGES </a>
                <ul
                  class="menu__list-nav-sub pos-absolute font-weight-light text-grey bg-white-medium"
                >
                  <li>Facebook</li>
                  <li>Youtube</li>
                  <li>Google</li>
                </ul>
              </li>
              <li class="font-weight-bold">
                <a href="#">BLOG </a>
                <ul
                  class="menu__list-nav-sub pos-absolute font-weight-light text-grey bg-white-medium"
                >
                  <li>BLOG 1</li>
                  <li>BLOG 2</li>
                  <li>BLOG 3</li>
                </ul>
              </li>
              <li class="font-weight-bold">
                <a href="#">PORTFOLIOS </a>
                <ul
                  class="menu__list-nav-sub pos-absolute font-weight-light text-grey bg-white-medium"
                >
                  <li>Menu menu 1</li>
                  <li>BLOG 2</li>
                  <li>BLOG 3</li>
                </ul>
              </li>
              <li class="font-weight-bold">
                <a href="#">SHOP </a>
                <ul
                  class="menu__list-nav-sub pos-absolute font-weight-light text-grey bg-white-medium"
                >
                  <li>SHOP 1</li>
                  <li>SHOP 2</li>
                  <li>SHOP 3</li>
                  <li>SHOP 4</li>
                  <li>SHOP 5</li>
                </ul>
              </li>
              <li class="font-weight-bold">
                <a href="#">FEATURES </a>
                <ul
                  class="menu__list-nav-sub pos-absolute font-weight-light text-grey bg-white-medium"
                >
                  <li>Facebook</li>
                  <li>Youtube</li>
                  <li>Google</li>
                </ul>
              </li>
              <li class="font-weight-bold">
                <a href="#">ELEMENTS </a>
                <ul
                  class="menu__list-nav-sub pos-absolute font-weight-light text-grey bg-white-medium"
                >
                  <li>Facebook</li>
                  <li>Youtube</li>
                  <li>Google</li>
                </ul>
              </li>
            </ul>
            <div
              class="menu__action d-flex flex-align-i-center flex-jus-c-center"
            >
              <div class="menu__icon-language">
                <img
                  class="menu__language"
                  src="../assets/img/english.png"
                  alt="english"
                  width="19px"
                  height="13px"
                />
              </div>
              <div class="menu__search"><i class="fas fa-search"></i></div>
              <router-link to="/my-cart">
                <div class="menu__cart d-flex">
                  <img
                    src="../assets/img/cart.png"
                    alt="cart"
                    width="18px"
                    height="15px"
                  />
                  <div class="triangle-left-icon"></div>
                  <div
                    class="menu__counter d-flex flex-align-i-center text-white bg-blue-light"
                  >
                    <span class="pos-relative">{{ numProductInCart }}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </nav>
        </div>
        <div class="menu__item d-flex flex-align-i-center" @click="goHome">
          <div class="menu__logo">
            <img src="../assets/img/logo.png" alt="logo" />
          </div>
          <div class="menu__text ff-montserrat">
            <span class="font-weight-light">THE</span>
            <span class="font-weight-bold">GEM</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import "../styles/components/CompHeader.scss";
import { mapActions } from "vuex";
export default {
  name: "comp-header",
  computed: {
    numProductInCart() {
      return this.$store.state.cart.products
        ? this.$store.state.cart.products.length
        : 0;
    },
  },
  methods: {
    ...mapActions(["getCart"]),
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
