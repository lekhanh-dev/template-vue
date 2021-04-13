<template>
  <section class="our-case-studies">
    <div class="container">
      <header
        class="our-case-studies__header ff-montserrat font-weight-light text-dark"
      >
        <span class="font-weight-bold">OUR CASE</span> STUDIES
      </header>
      <div class="our-case-studies__content text-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        numquam fugit praesentium voluptates dolorum consequatur blanditiis
        debitis accusamus, quae ratione quo nemo id sed repudiandae nam autem
        consequuntur porro nobis?
      </div>
      <div class="our-case-studies__group-btn">
        <button
          class="btn ff-montserrat border-rounded-high text-grey"
          v-for="(item, index) in buttons"
          :key="index"
        >
          {{ item }}
        </button>
      </div>
      <div class="our-case-studies__group-image">
        <div class="pos-relative" v-for="(item, index) in images" :key="index">
          <img class="pos-absolute" :src="getLinkImage(item)" alt="image" />
        </div>
      </div>
      <div class="our-case-studies__footer d-flex flex-align-i-center">
        <div></div>
        <button
          class="btn ff-montserrat border-rounded-high bg-white text-blue-light"
        >
          MORE WORKS
        </button>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script>
import { linkImage } from "../config";
export default {
  name: "our-case-study",
  data() {
    return {
      buttons: ["ALL", "HOVER BUT", " ACTIVE BUT", "CATEGORY 3"],
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
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
@import "../styles/components/OurCaseStudy.scss";
</style>
