<template>
  <section class="core-competence">
    <div class="core-competence__header text-white pos-relative">
      <div class="container">
        <header class="core-competence__header-title ff-montserrat">
          <span class="font-weight-bold">CORE </span
          ><span class="font-weight-light">COMPETENCE</span>
        </header>
        <div class="core-competence__header-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          incidunt deserunt repudiandae dolore libero, dolor cumque minima
          reprehenderit recusandae sequi inventore possimus, non saepe? Libero
          nulla consequatur omnis a beatae.Doloribus incidunt deserunt
          repudiandae dolore libero, dolor cumque minima reprehenderit
          recusandae sequi inventore possimus, non saepe? Libero nulla
          consequatur omnis a beatae.
        </div>
      </div>
    </div>
    <div class="core-competence__list-item bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap">
          <article
            class="core-competence__item text-white pos-relative"
            v-for="(item, index) in dataArray"
            :key="index"
          >
            <div class="core-competence__item-icon pos-relative">
              <img :src="getLinkImage(item.image)" alt="icon" />
            </div>
            <div
              class="core-competence__item-title ff-montserrat font-weight-bold pos-relative"
            >
              {{ item.title }}
            </div>
            <div class="core-competence__item-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              molestiae modi mollitia, reiciendis dolore iure assumenda
              cupiditate tempora illo nesciunt expedita laborum aliquid harum,
              debitis commodi. Magnam distinctio corrupti soluta!
            </div>
            <div class="core-competence__item-button">
              <button
                class="btn ff-montserrat border-rounded-high bg-grey text-blue-light"
              >
                LEARN MORE
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { linkImage } from "../config";
export default {
  name: "core-competence",
  data() {
    return {
      dataArray: [
        { title: "CONSULTING", image: "icon9.png" },
        { title: "PROGRAMMING", image: "icon10.png" },
        { title: "DDEVOLOPMENT", image: "icon11.png" },
        { title: "MARKETING", image: "icon12.png" },
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
@import "../styles/components/CoreCompetence.scss";
</style>
