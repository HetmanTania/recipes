<template>
  <div class="block">
    <div class="mealTypes is-flex is-flex-direction-column">
      <slider>
        <slot>
          <meal-tile v-for="item in mealTypes" :key="item.id" :meal="item">
          </meal-tile>
        </slot>
      </slider>
      <random-recipes></random-recipes>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MEALTYPES } from "../../constants.js";
import MealTile from "@/components/Tiles/MealTile/MealTile.vue";
import Slider from "@/components/Slider/Slider.vue";
import RandomRecipes from "../RandomRecipes/RandomRecipes.vue";

export default {
  data() {
    return {
      mealTypes: MEALTYPES,
    };
  },
  computed: {
    ...mapState("recipe", ["randomRecipes"]),
  },
  methods: {
    resize() {
      console.log("resize");
    },
  },
  components: { MealTile, Slider, RandomRecipes },
};
</script>

<style lang="scss" scoped>
@import "./scss/Home.scss";
</style>
