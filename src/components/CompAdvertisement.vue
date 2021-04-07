<template>
  <section class="advertisement">
    <div class="container">
      <div class="advertisement__list-item d-flex flex-align-i-center">
        <div
          class="advertisement__item advertisement__wrap-logo d-flex flex-align-i-baseline ff-montserrat font-weight-medium text-dark"
        >
          <span>THE</span>
          <div class="advertisement__logo">
            <img src="../assets/img/logo.png" alt="logo" />
          </div>
          <span>GEM</span>
        </div>
        <div
          class="advertisement__item advertisement__content text-dark font-weight-light"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div class="advertisement__item advertisement__button">
          <button class="btn border-rounded-high text-dark">
            GREAT, I WANT TO BUY NOW!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "comp-advertisement",
};
</script>

<style lang="scss" scoped>
@import "../styles/components/CompAdvertisement.scss";
</style>
