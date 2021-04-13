<template>
  <section class="slide-show pos-relative bg-white-medium">
    <button
      class="btn btn-left bg-grey-light text-blue-light pos-absolute"
      @click="down"
    >
      <i class="fas fa-arrow-left"></i>
    </button>
    <div class="container">
      <div class="wrap-image pos-relative">
        <img class="pos-absolute" :src="selectedImage" alt="banner" />
      </div>
    </div>
    <button
      class="btn btn-right bg-grey-light text-blue-light pos-absolute"
      @click="up"
    >
      <i class="fas fa-arrow-right"></i>
    </button>
  </section>
</template>

<script>
import "../styles/components/SlideShow.scss";
import { mapActions } from "vuex";
import { linkImage } from "../config";

export default {
  name: "slide-show",
  data() {
    return {
      selectedImageIndex: 0,
      running: null,
    };
  },
  computed: {
    selectedImage() {
      const link = linkImage;
      return this.$store.state.banners.length > 0
        ? require(`@/${link}/${
            this.$store.state.banners[this.selectedImageIndex]
          }`)
        : "";
    },
  },
  methods: {
    ...mapActions(["getBanner"]),
    up() {
      this.selectedImageIndex =
        (this.selectedImageIndex + 1) % this.$store.state.banners.length;
      clearInterval(this.running);
      this.createRuning();
    },
    down() {
      this.selectedImageIndex =
        (this.selectedImageIndex -
          (1 % this.$store.state.banners.length) +
          this.$store.state.banners.length) %
        this.$store.state.banners.length;
      clearInterval(this.running);
      this.createRuning();
    },
    createRuning() {
      this.running = setInterval(() => {
        this.selectedImageIndex =
          (this.selectedImageIndex + 1) % this.$store.state.banners.length;
      }, 2000);
    },
  },
  mounted() {
    this.createRuning();
    this.getBanner();
  },
};
</script>
