<template>
  <div v-if="isShow" class="miniInfoRecipe level">
    <div class="level-item has-text-centered">
      <div v-if="readyInMinutes" class="is-flex is-align-items-center">
        <img src="https://img.icons8.com/dotty/42/000000/clock.png" />
        <div>{{ readyInMinutes }} min</div>
      </div>
    </div>
    <div v-if="servings" class="level-item has-text-centered">
      <div class="is-flex is-align-items-center">
        <img
          src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/42/000000/external-dish-hotel-services-flatart-icons-outline-flatarticons.png"
        />
        <div>Serves {{ servings }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "miniInfoRecipe",
  props: {
    readyInMinutes: {
      type: Number,
    },
    servings: {
      type: Number,
    },
  },
  computed: {
    isShow() {
      return !!(this.readyInMinutes || this.servings);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/colors.scss";
@import "./scss/MiniInfoRecipe.scss";
</style>
