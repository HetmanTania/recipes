<template>
  <div class="stepDone">
    <div class="numberStep">{{ number }}</div>
    <div
      class="done is-flex is-align-items-center is-justify-content-flex-start"
    >
      <input v-model="isDone" :name="id" :id="id" type="checkbox" />
      <label @click="onStepDone" :for="id">
        <div class="checkItemText">Done</div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepDone",
  props: {
    number: {
      type: Number,
      requered: true,
    },
  },
  data() {
    return {
      id: this.number,
      isDone: false,
    };
  },
  methods: {
    onStepDone() {
      this.$emit("stepDone", { id: this.id, isDone: !this.isDone });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/colors.scss";
@import "./scss/StepDone.scss";
</style>
