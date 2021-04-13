<template>
  <section class="full-width">
    <div class="container-fluid">
      <div class="full-width__list-item d-flex flex-wrap ff-montserrat">
        <article
          class="full-width__item"
          v-for="(item, index) in dataArray"
          :key="index"
          :class="item.bgClass"
        >
          <header class="full-width__number font-weight-bold text-white">
            {{ item.header }}
          </header>
          <div class="full-width__title font-weight-light">
            {{ item.titleLight }}
            <span class="font-weight-bold">{{ item.titleBold }}</span>
          </div>
          <div
            class="full-width__content ff-source-san-pro font-weight-light text-dark"
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
export default {
  name: "full-width",
  data() {
    return {
      dataArray: [
        {
          header: "01.",
          titleLight: "LOREM",
          titleBold: "IPSUM",
          bgClass: "bg-green",
          textClass: "text-dark",
        },
        {
          header: "02.",
          titleLight: "LEFT SIDE",
          titleBold: "ALIGNING",
          bgClass: "bg-blue",
          textClass: "text-dark",
        },
        {
          header: "03.",
          titleLight: "CURSUS",
          titleBold: "MAURIS",
          bgClass: "bg-grey",
          textClass: "text-white",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/FullWidth.scss";
</style>
