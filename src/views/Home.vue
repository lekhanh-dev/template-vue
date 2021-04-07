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
    <contact-us />
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
  },
};
</script>
