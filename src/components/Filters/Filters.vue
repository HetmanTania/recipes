<template>
  <div class="filters">
    <div class="title is-5">Filters:</div>
    <div @click="onSelectFilterOther" class="other-filters">
      <range
        @setRange="setFiterMaxReadyTime"
        title="Max Ready Time"
        :min="10"
        :max="300"
      ></range>
    </div>

    <accordion
      @selectFilter="onSelectFilter"
      :accordionList="getAccordionList"
    ></accordion>

    <button @click="startSearch" class="button">
      <img class="svg" src="@/assets/icon/search.svg" />
      <span>Find Recipes</span>
    </button>
  </div>
</template>

<script>
import Accordion from "../Accordion/Accordion.vue";
import Range from "../Range/Range.vue";
import {
  CUISINES,
  MEALTYPES,
  DIET,
  INCLUDE_INGREDIENTS,
} from "../../constants.js";
export default {
  data() {
    return {
      filters: [],
    };
  },
  methods: {
    setFiterMaxReadyTime(filter) {
      console.log(filter);
      const index = this.filters.findIndex((el) => {
        return el.id === "maxReadyTime";
      });
      if (index !== -1) {
        this.filters.splice(index, 1);
      }
      this.filters = [...this.filters, { id: "maxReadyTime", value: filter }];
      console.log(this.filters);
    },
    startSearch() {
      const formedFilters = this.formationFilters;
      const strStearch = this.fromantStrSearch(formedFilters);
      this.$emit("onClickSearch", strStearch);
    },
    onSelectFilter(filter) {
      console.log(filter);
      if (!filter) {
        return;
      }
      filter.id = filter.id[0].toLowerCase() + filter.id.slice(1);
      filter.id = filter.id.replace(" ", "");
      filter.value = filter.value.replace(" ", "");
      filter.value = filter.value[0].toLowerCase() + filter.value.slice(1);

      const index = this.filters.findIndex((el) => {
        return el.value === filter.value;
      });
      if (index === -1) {
        this.filters = [...this.filters, filter];
      } else {
        this.filters.splice(index, 1);
      }
      console.log(this.filters);
    },
  },
  computed: {
    fromantStrSearch() {
      return (formedFilters) => {
        let strSearch = "";
        const lengthFormatFilter = Object.keys(formedFilters).length;
        Object.keys(formedFilters).forEach((key, index) => {
          const joinList = formedFilters[key].list.join(",");
          console.log(joinList);
          strSearch += `${key}=${joinList}`;
          if (index < lengthFormatFilter - 1) {
            strSearch += "&";
          }
        });
        return strSearch;
      };
    },
    formationFilters() {
      const formatFilter = {};
      this.filters.forEach((el) => {
        if (el.id in formatFilter) {
          formatFilter[el.id].list.push(el.value);
        } else {
          formatFilter[el.id] = {
            list: [el.value],
          };
        }
      });
      return formatFilter;
    },
    includeIngredients() {
      return INCLUDE_INGREDIENTS;
    },
    cuisines() {
      return CUISINES;
    },
    mealTypes() {
      return MEALTYPES.map((el) => {
        return el.title;
      });
    },
    diet() {
      return DIET;
    },
    getAccordionList() {
      return {
        cuisines: {
          title: "Cuisine",
          list: [...this.cuisines],
        },
        mealTypes: {
          title: "Meal Types",
          list: [...this.mealTypes],
        },
        diet: {
          title: "Diet",
          list: [...this.diet],
        },
        includeIngredients: {
          title: "Include Ingredients",
          list: [...this.includeIngredients],
        },
      };
    },
  },
  components: { Accordion, Range },
};
</script>

<style lang="scss">
@import "../../style/colors.scss";
@import "./scss/Filters.scss";
</style>
