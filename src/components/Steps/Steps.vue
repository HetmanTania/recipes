<template>
  <div v-if="stepsRecipe" class="steps">
    <div class="title is-4">Steps</div>
    <div
      v-for="step in stepsRecipe"
      :key="step.number"
      class="step is-flex is-align-content-flex-start"
    >
      <StepDone :onStepDone="stepDone" :number="step.number"></StepDone>
      <div :class="step.isDone ? 'done' : ''" class="text">
        <div></div>
        {{ step.step }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import StepDone from "../StepDone/StepDone.vue";

export default {
  name: "Steps",
  async created() {
    await this.stepsRequest(this.id);
  },
  props: {
    id: {
      type: Number,
      requered: true,
    },
  },
  computed: mapState("step", ["stepsRecipe"]),
  methods: {
    ...mapActions("step", ["stepsRequest"]),
    stepDone(step) {
      this.$store.commit("step/setIsDone", step);
    },
  },
  components: { StepDone },
};
</script>

<style lang="scss" scoped>
@import "../../style/colors.scss";
@import "./scss/Steps.scss";
</style>
