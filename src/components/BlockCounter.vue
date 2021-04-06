<template>
  <section class="counter bg-dark">
    <div class="container">
      <div class="counter__list-item d-flex">
        <article
          class="counter__item text-green-light d-flex flex-align-i-center flex-dir-column"
        >
          <div
            class="counter__box d-flex flex-jus-c-center flex-align-i-center pos-relative"
          >
            <div class="counter__icon d-flex">
              <img src="../assets/img/icon5.png" alt="icon" />
            </div>
          </div>
          <div class="counter__number font-weight-light ff-montserrat">
            2189
          </div>
          <div class="counter__title font-weight-light text-white">
            Support Posts
          </div>
        </article>
        <article
          class="counter__item text-spring-green d-flex flex-align-i-center flex-dir-column"
        >
          <div
            class="counter__box d-flex flex-jus-c-center flex-align-i-center pos-relative"
          >
            <div class="counter__icon d-flex">
              <img src="../assets/img/icon6.png" alt="icon" />
            </div>
          </div>
          <div class="counter__number font-weight-light ff-montserrat">
            125
          </div>
          <div class="counter__title font-weight-light text-white">
            Customers
          </div>
        </article>
        <article
          class="counter__item text-blue-light d-flex flex-align-i-center flex-dir-column"
        >
          <div
            class="counter__box d-flex flex-jus-c-center flex-align-i-center pos-relative"
          >
            <div class="counter__icon d-flex">
              <img src="../assets/img/icon7.png" alt="icon" />
            </div>
          </div>
          <div class="counter__number font-weight-light ff-montserrat">
            4789
          </div>
          <div class="counter__title font-weight-light text-white">
            Lorem Ipsum Dolor
          </div>
        </article>
        <div
          class="counter__item text-medium-purple d-flex flex-align-i-center flex-dir-column"
        >
          <div
            class="counter__box d-flex flex-jus-c-center flex-align-i-center pos-relative"
          >
            <div class="counter__icon d-flex">
              <img src="../assets/img/icon8.png" alt="icon" />
            </div>
          </div>
          <div class="counter__number font-weight-light ff-montserrat">
            502
          </div>
          <div class="counter__title font-weight-light text-white">
            Lorem Ipsum Dolor
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "block-counter",
};
</script>

<style lang="scss" scoped>
@import "../styles/components/BlockCounter.scss";
</style>
