<template>
  <div class="accordion-item">
    <div class="title is-6 accordion-title" @click="onShowAccordion">
      {{ title }}
    </div>
    <ul
      ref="ul"
      @click="onSelectFilter"
      class="accordion-list"
      :class="{ show: isShow }"
    >
      <li class="accordion-panel" v-for="item in list" :key="item">
        <input :id="item" type="checkbox" :name="item" />
        <label class="checkbox" :for="item">
          <p>{{ item }}</p>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requered: true,
    },
    list: {
      type: Array,
      requered: true,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onSelectFilter(e) {
      if (e.target.id) {
        const id = e.target.id;
        this.$emit("selectFilter", { value: id, id: this.title });
      }
    },
    onShowAccordion() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.$refs.ul.style.height = `${this.$refs.ul.scrollHeight}px`;
        this.$refs.ul.style.transition = "height 1.5s";
      } else {
        this.$refs.ul.style.height = "0px";
      }
    },
  },
};
</script>
