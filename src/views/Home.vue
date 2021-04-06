<template>
  <div class="home">
    <comp-header />
    <slide-show />
    <comp-feature />
    <block-counter />
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "../components/CompHeader.vue";
import CompFooter from "../components/CompFooter.vue";
import SlideShow from "../components/SlideShow.vue";
import CompFeature from "../components/CompFeature.vue";
import BlockCounter from "../components/BlockCounter.vue";
export default {
  name: "Home",
  components: {
    CompHeader,
    CompFooter,
    SlideShow,
    CompFeature,
    BlockCounter,
  },
};
</script>
