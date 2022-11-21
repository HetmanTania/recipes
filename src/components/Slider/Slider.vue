<template>
  <div class="slider">
    <div
      ref="sliderItems"
      v-resize="resize"
      class="sliderItems is-flex is-flex-wrap-nowrap"
    >
      <slot></slot>
    </div>
    <div
      class="arrows is-flex is-justify-content-space-between is-align-content-center"
    >
      <div
        class="arrowLeft is-flex is-justify-content-center is-align-items-center"
        @click="clickLeftArrow"
      >
        <img src="@/assets/icon/up-arrow-svgrepo-com.svg" />
      </div>
      <div
        class="arrowRight is-flex is-justify-content-center is-align-items-center"
        @click="clickRightArrow"
      >
        <img src="@/assets/icon/up-arrow-svgrepo-com.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { getNumberFromPxl, toFixed } from "../../utils";

export default {
  data() {
    return {
      widthSliderItem: 0,
      windowInnerWidth: 0,
    };
  },
  mounted() {
    this.resize();
  },
  methods: {
    resize(innerWidth) {
      const sliderItem = this.$refs.sliderItems.children[0];
      const width = sliderItem.getBoundingClientRect().width;
      this.widthSliderItem = width;
      if (innerWidth < this.windowInnerWidth) {
        this.resizeSliderRight();
      } else {
        this.resizeSliderLeft();
      }

      this.windowInnerWidth = innerWidth;
    },
    clickLeftArrow() {
      const sliderItems = this.$refs.sliderItems;
      const rightPercent = toFixed(
        getNumberFromPxl(sliderItems.style.right),
        3
      );

      if (!rightPercent) {
        const sliderItemsWidth = sliderItems.clientWidth;
        sliderItems.style.right = `${sliderItemsWidth}px`;
      } else {
        sliderItems.style.right = `${
          rightPercent - this.widthSliderItem - 6
        }px`;
      }
    },
    clickRightArrow() {
      const sliderItems = this.$refs.sliderItems;
      const rightPercent = toFixed(
        getNumberFromPxl(sliderItems.style.right),
        3
      );
      const sliderItemsWidth = sliderItems.clientWidth;
      if (rightPercent >= sliderItemsWidth) {
        sliderItems.style.right = "0px";
      } else {
        sliderItems.style.right = `${
          rightPercent + this.widthSliderItem + 6
        }px`;
      }
    },
    resizeSlider() {
      const sliderItems = this.$refs.sliderItems;
      const rightPercent = sliderItems.style.right;
      if (!rightPercent) {
        sliderItems.style.right = "0px";
      } else {
        const right = toFixed(getNumberFromPxl(rightPercent), 3);
        sliderItems.style.right = `${right - 1}px`;
      }
    },
    resizeSliderLeft() {
      const sliderItems = this.$refs.sliderItems;
      const rightPercent = sliderItems.style.right;

      if (!rightPercent) {
        sliderItems.style.right = "0px";
      } else {
        const right = toFixed(getNumberFromPxl(rightPercent), 3);
        sliderItems.style.right = `${right + 1}px`;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./scss/slider.scss";
@import "@/style/colors.scss";
</style>
