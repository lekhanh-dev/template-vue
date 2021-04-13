<template>
  <div id="app">
    <comp-loading />
    <comp-alert />
    <router-view />
  </div>
</template>
<script>
import CompLoading from "./components/CompLoading";
import CompAlert from "./components/CompAlert";
export default {
  name: "App",
  components: {
    CompLoading,
    CompAlert,
  },
};
</script>
<style lang="scss">
@import "./styles/index.scss";
</style>
