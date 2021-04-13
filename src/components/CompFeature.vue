<template>
  <section class="feature">
    <div class="container">
      <div class="feature__list-item d-flex flex-wrap">
        <article
          class="feature__item pos-relative"
          v-for="(item, index) in dataArray"
          :key="index"
        >
          <header
            class="feature__title d-flex flex-jus-c-space-between flex-align-i-center"
          >
            <h1 class="font-weight-bold ff-montserrat text-dark">
              Lorem ipsum dolor sit
            </h1>
            <div class="feature__icon">
              <img
                :src="getLinkImage(item)"
                alt="icon"
                width="42px"
                height="46px"
              />
            </div>
          </header>
          <div class="feature__content text-grey">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            sit qui eius vitae dolor dignissimos ullam asperiores architecto.
            Est quae consequatur eaque, molestiae perspiciatis earum
            voluptatibus autem ab modi aliquam.
          </div>
          <div class="feature__action">
            <button
              class="btn d-flex flex-jus-c-center flex-align-i-center border-rounded-low bg-blue-light text-white ff-montserrat"
            >
              Learn more
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { linkImage } from "../config";
export default {
  name: "comp-feature",
  data() {
    return { dataArray: ["icon2.png", "icon3.png", "icon4.png"] };
  },
  methods: {
    getLinkImage(imageName) {
      const link = linkImage;
      return require(`@/${link}/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/CompFeature.scss";
</style>
