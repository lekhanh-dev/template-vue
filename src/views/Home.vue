<template>
  <div class="home">
    <comp-header />
    <slide-show />
    <list-product />
    <comp-feature />
    <block-counter />
    <why-choose-us />
    <full-width />
    <our-case-study />
    <core-competence />
    <pricing-table />
    <comp-advertisement />
    <open-vacancies />
    <contact-us />
    <section class="empty bg-dark pos-relative"></section>
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "../components/CompHeader.vue";
import CompFooter from "../components/CompFooter.vue";
import SlideShow from "../components/SlideShow.vue";
import CompFeature from "../components/CompFeature.vue";
import BlockCounter from "../components/BlockCounter.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import FullWidth from "../components/FullWidth.vue";
import OurCaseStudy from "../components/OurCaseStudy.vue";
import CoreCompetence from "../components/CoreCompetence.vue";
import PricingTable from "../components/PricingTable.vue";
import ContactUs from "../components/ContactUs.vue";
import ListProduct from "../components/product/ListProduct.vue";
import CompAdvertisement from "../components/CompAdvertisement.vue";
import OpenVacancies from "../components/OpenVacancies.vue";

export default {
  name: "Home",
  components: {
    CompHeader,
    CompFooter,
    SlideShow,
    CompFeature,
    BlockCounter,
    WhyChooseUs,
    FullWidth,
    OurCaseStudy,
    CoreCompetence,
    PricingTable,
    ContactUs,
    ListProduct,
    CompAdvertisement,
    OpenVacancies,
  },
};
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  padding-top: 23.75%;
  &::before,
  &::after {
    content: "";
    width: 50%;
    height: 100%;
    background: aqua;
    position: absolute;
    top: 0;
  }
  &::after {
    right: 0;
    border-top-left-radius: 40px;
  }
  &::before {
    left: 0;
    border-top-right-radius: 40px;
  }
}
</style>
