<template>
  <div class="miniInfoRecipe level">
    <div class="level-item has-text-centered">
      <div class="is-flex is-align-items-flex-center">
        <img src="https://img.icons8.com/dotty/42/000000/clock.png" />
        <div>{{ readyInMinutes }} min</div>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div class="is-flex is-align-items-flex-center">
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
  props: ["readyInMinutes", "servings"],
};
</script>

<style lang="scss" scoped>
@import "./scss/MiniInfoRecipe.scss";
</style>
