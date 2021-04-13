<template>
  <div
    v-show="$store.state.alert.open"
    class="alert-container"
    @click="handleAlert({ open: false })"
  >
    <div class="alert">
      <p class="message">{{ $store.state.alert.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "comp-alert",
  methods: {
    ...mapActions(["handleAlert"]),
  },
};
</script>

<style lang="scss" scoped>
.alert-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert {
  width: 400px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(125, 70, 255);
  font-weight: bold;
  font-size: 20px;
}
</style>
