<template>
  <div class="home">
    <comp-header />
    <slide-show />
    <comp-feature />
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "../components/CompHeader.vue";
import CompFooter from "../components/CompFooter.vue";
import SlideShow from "../components/SlideShow.vue";
import CompFeature from "../components/CompFeature.vue";
export default {
  name: "Home",
  components: {
    CompHeader,
    CompFooter,
    SlideShow,
    CompFeature,
  },
};
</script>
