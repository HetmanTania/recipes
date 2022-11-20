<template>
  <Header></Header>
  <router-view></router-view>
  <search-panel v-if="isSearchPanelShow"></search-panel>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header/Header.vue";
import SearchPanel from "@/components/SearchPanel/SearchPanel.vue";
export default {
  computed: {
    ...mapState("components", ["isSearchPanelShow"]),
  },
  components: { Header, SearchPanel },
};
</script>
<style lang="scss">
@import "./style/colors.scss";
@import "./style/main.scss";
</style>
