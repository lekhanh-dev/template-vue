<template>
  <div v-show="$store.state.loading" class="wrap-loading">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: "comp-loading",
};
</script>

<style scoped lang="scss">
.wrap-loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
}
.loading {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #f7d4c8;
  border-right: 10px solid #fdfaf3;
  border-bottom: 10px solid #cfecf5;
  border-left: 10px solid #a9e2f5;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
