<template>
  <div class="mealTitle itemTile card">
    <router-link :to="{ name: 'search', params: { id: meal.id } }">
      <div class="img-box">
        <div class="bg-green"></div>
        <div class="img" v-bind:style="{ backgroundImage: getUrlImage }"></div>
      </div>
      <h4 class="title is-5">
        {{ meal.title }}
      </h4>
    </router-link>
  </div>
</template>

<script>
import { getPathImage } from "../../../utils";

export default {
  name: "MaelTitle",
  props: ["meal"],
  computed: {
    getUrlImage() {
      return `url(${getPathImage(`mealType/${this.meal.image}`)})`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/MealTile.scss";
</style>
