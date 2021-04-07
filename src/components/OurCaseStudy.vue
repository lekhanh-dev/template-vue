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
        <button class="btn ff-montserrat border-rounded-high text-grey">
          ALL
        </button>
        <button class="btn ff-montserrat border-rounded-high text-grey">
          HOVER BUT
        </button>
        <button class="btn ff-montserrat border-rounded-high text-grey">
          ACTIVE BUT
        </button>
        <button class="btn ff-montserrat border-rounded-high text-grey">
          CATEGORY 3
        </button>
      </div>
      <div class="our-case-studies__group-image">
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image1.jpg"
            alt="image"
          />
        </div>
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image3.jpg"
            alt="image"
          />
        </div>
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image4.jpg"
            alt="image"
          />
        </div>
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image2.jpg"
            alt="image"
          />
        </div>
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image5.jpg"
            alt="image"
          />
        </div>
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image6.jpg"
            alt="image"
          />
        </div>
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image7.jpg"
            alt="image"
          />
        </div>
        <div class="pos-relative">
          <img
            class="pos-absolute"
            src="../assets/img/image8.jpg"
            alt="image"
          />
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
export default {
  name: "our-case-study",
};
</script>

<style lang="scss" scoped>
@import "../styles/components/OurCaseStudy.scss";
</style>
