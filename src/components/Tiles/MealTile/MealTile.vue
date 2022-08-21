<template>
  <div class="mealTitle itemTile card">
    <router-link :to="{ name: 'search', params: { id: meal.id } }">
      <div class="img-box">
        <div class="bg-green"></div>
        <div
          class="img"
          v-bind:style="{
            backgroundImage: `url('./assets/mealType/${meal.image}')`,
          }"
        ></div>
        <!-- v-bind:style="{backgroundImage:`url('./assets/mealType/${meal.image}')`,`
          `··········<div·class="img"·v-bind:style="{backgroundImage:·`url('./assets/mealType/${meal.image}')`}"></div>
          ␍` with `········<div⏎··········class="img"⏎··········v-bind:style="{⏎············backgroundImage:·`url('./assets/mealType/${meal.image}')`,`  prettier/prettier -->
      </div>
      <h4 class="title is-5">
        {{ meal.title }}
      </h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MaelTitle",
  props: ["meal"],
};
</script>

<style lang="scss" scoped>
@import "./scss/MealTile.scss";
</style>
