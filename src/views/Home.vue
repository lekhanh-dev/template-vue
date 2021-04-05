<template>
  <div class="home">
    <comp-header />
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "../components/CompHeader.vue";
import CompFooter from "../components/CompFooter.vue";
export default {
  name: "Home",
  components: {
    CompHeader,
    CompFooter,
  },
};
</script>
