<template>
  <div class="counter">
    <button class="btn" @click="decrease(id)">-</button>
    <input class="input-number" :value="getNumById(id)" type="number" />
    <button class="btn" @click="increment(id)">
      +
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "comp-counter",
  methods: {
    ...mapActions({
      increment: "increment",
      decrease: "decrease",
    }),
  },
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters(["getNumById"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/cart/CompCounter.scss";
</style>
