<template>
  <section class="slide-show pos-relative bg-white-medium">
    <button
      class="btn btn-left bg-grey-light text-blue-light pos-absolute"
      @click="up"
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
      @click="down"
    >
      <i class="fas fa-arrow-right"></i>
    </button>
  </section>
</template>

<script>
import "../styles/components/SlideShow.scss";
export default {
  name: "slide-show",
  data() {
    return {
      listImage: this.$store.state.listImage,
      selectedImageIndex: 0,
      running: null,
    };
  },
  computed: {
    selectedImage() {
      return require(`../assets/img/${
        this.listImage[this.selectedImageIndex]
      }`);
    },
  },
  methods: {
    up() {
      this.selectedImageIndex =
        this.selectedImageIndex === this.listImage.length - 1
          ? 0
          : this.selectedImageIndex + 1;
      clearInterval(this.running);
      this.running = this.createRuning();
    },
    down() {
      this.selectedImageIndex =
        this.selectedImageIndex === 0
          ? this.listImage.length - 1
          : this.selectedImageIndex - 1;
      clearInterval(this.running);
      this.running = this.createRuning();
    },
    createRuning() {
      return setInterval(() => {
        this.selectedImageIndex =
          this.selectedImageIndex === this.listImage.length - 1
            ? 0
            : this.selectedImageIndex + 1;
      }, 3000);
    },
  },
  mounted() {
    this.running = this.createRuning();
  },
};
</script>
