<template>
  <section class="full-width">
    <div class="container-fluid">
      <div class="full-width__list-item d-flex flex-wrap ff-montserrat">
        <article class="full-width__item bg-green">
          <header class="full-width__number font-weight-bold text-white">
            01.
          </header>
          <div class="full-width__title font-weight-light">
            LOREM <span class="font-weight-bold">IPSUM</span>
          </div>
          <div
            class="full-width__content ff-source-san-pro font-weight-light text-dark"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            sit qui eius vitae dolor dignissimos ullam asperiores architecto
          </div>
        </article>
        <article class="full-width__item bg-blue">
          <header class="full-width__number font-weight-bold text-white">
            02.
          </header>
          <div class="full-width__title font-weight-light">
            LEFT SIDE <span class="font-weight-bold">ALIGNING</span>
          </div>
          <div class="full-width__content ff-source-san-pro font-weight-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            sit qui eius vitae dolor dignissimos ullam asperiores architecto
          </div>
        </article>
        <article class="full-width__item bg-grey">
          <header class="full-width__number font-weight-bold text-white">
            03.
          </header>
          <div class="full-width__title font-weight-light">
            CURSUS <span class="font-weight-bold">MAURIS</span>
          </div>
          <div
            class="full-width__content ff-source-san-pro font-weight-light full-width--color-white"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            sit qui eius vitae dolor dignissimos ullam asperiores architecto
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "full-width" };
</script>

<style lang="scss" scoped>
@import "../styles/components/FullWidth.scss";
</style>
