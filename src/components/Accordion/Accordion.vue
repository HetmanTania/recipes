<template>
  <div class="accordion">
    <accordion-item
      @selectFilter="onSelectFilter"
      :title="accordion.title"
      :list="accordion.list"
      v-for="accordion in accordionList"
      :key="accordion"
    ></accordion-item>
  </div>
</template>

<script>
import AccordionItem from "./AccordionItem.vue";
export default {
  props: {
    accordionList: {
      type: Object,
      requered: true,
    },
  },
  methods: {
    onSelectFilter(filter) {
      this.$emit("selectFilter", filter);
    },
  },
  components: { AccordionItem },
};
</script>

<style lang="scss">
@import "../../style/colors.scss";
@import "./scss/Accordion.scss";
</style>
