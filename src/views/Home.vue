<template>
  <div class="home">
    <comp-header />
    <slide-show />
    <comp-feature />
    <block-counter />
    <why-choose-us />
    <full-width />
    <our-case-study />
    <core-competence />
    <pricing-table />
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
  },
};
</script>
