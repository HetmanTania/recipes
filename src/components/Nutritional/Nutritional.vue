<template>
  <div class="nutritional widget">
    <div
      class="title-widget is-flex is-align-items-center is-justify-content-center"
    >
      <img
        src="https://img.icons8.com/pastel-glyph/32/000000/information--v2.png"
      />
      <div class="title is-3">Nutritional information</div>
    </div>
    <div
      class="nutritional-values is-flex is-flex-wrap-wrap is-justify-content-center"
    >
      <div
        v-for="(nutritional, key) in nutritionalInfo"
        :key="key"
        class="block-nutritional is-flex is-flex-direction-column is-align-items-center is-justify-content-space-evenly"
      >
        <div class="value">{{ nutritional }}</div>
        <div class="name">{{ key }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nutritional",
  props: ["nutritionalList"],
  data: function () {
    return {
      nutritionalInfo: {},
    };
  },
  watch: {
    nutritionalList(newValue) {
      if (newValue) {
        this.nutritionalInfo = {
          calories: newValue.calories,
          carbs: newValue.carbs,
          fat: newValue.fat,
          protein: newValue.protein,
          // fat: newValue.bad[2].amount,
          sugar: newValue.bad[4].amount,
          cholesterol: newValue.bad[5].amount,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/Nutritional.scss";
</style>
