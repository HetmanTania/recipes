<template>
  <div class="range-block">
    <div class="title is-6">{{ title }}: {{ valueRange }} {{ units }}</div>
    <input
      class="range-slider"
      @input="setValue"
      step="5"
      type="range"
      v-model="valueRange"
      :min="min"
      :max="max"
    />
  </div>
</template>

<script>
export default {
  created() {
    if (this.min) {
      this.valueRange = this.min;
    }
  },
  props: {
    title: {
      type: String,
      requered: true,
    },
    min: {
      type: Number,
      requered: true,
    },
    max: {
      type: Number,
      requered: true,
    },
    units: {
      type: String,
      default: "Min",
    },
  },
  data() {
    return {
      valueRange: 0,
    };
  },
  methods: {
    setValue() {
      this.$emit("setRange", this.valueRange);
    },
  },
};
</script>

<style lang="scss">
@import "../../style/colors.scss";
@import "./scss/Range.scss";
</style>
