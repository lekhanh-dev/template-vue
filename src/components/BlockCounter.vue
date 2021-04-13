<template>
  <section class="counter bg-dark">
    <div class="container">
      <div class="counter__list-item d-flex">
        <article
          v-for="(item, index) in dataArray"
          :key="index"
          class="counter__item d-flex flex-align-i-center flex-dir-column"
          :class="item.textClass"
        >
          <div
            class="counter__box d-flex flex-jus-c-center flex-align-i-center pos-relative"
          >
            <div class="counter__icon d-flex">
              <img :src="getLinkImage(item.image)" alt="icon" />
            </div>
          </div>
          <div class="counter__number font-weight-light ff-montserrat">
            {{ item.number }}
          </div>
          <div class="counter__title font-weight-light text-white">
            {{ item.title }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { linkImage } from "../config";
export default {
  name: "block-counter",
  data() {
    return {
      dataArray: [
        {
          number: 2189,
          title: "Support Posts",
          image: "icon5.png",
          textClass: "text-green-light",
        },
        {
          number: 125,
          title: "Customers",
          image: "icon6.png",
          textClass: "text-spring-green",
        },
        {
          number: 4789,
          title: "Lorem Ipsum Dolor",
          image: "icon7.png",
          textClass: "text-blue-light",
        },
        {
          number: 502,
          title: "Support Posts",
          image: "icon8.png",
          textClass: "text-medium-purple",
        },
      ],
    };
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
@import "../styles/components/BlockCounter.scss";
</style>
