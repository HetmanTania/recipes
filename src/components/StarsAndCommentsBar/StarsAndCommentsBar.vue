<template>
  <div
    class="starsAndCommentsBar is-flex is-justify-content-center is-align-items-center"
  >
    <div class="stars">
      <i class="fa fa-star" aria-hidden="true"></i>
      <div>
        {{ stars }}
      </div>
    </div>
    <div class="comments">
      <i class="fa fa-comment" aria-hidden="true"></i>
      <div>
        {{ comments }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarsAndCommentsBar",
  pops: ["stars", "comments"],
};
</script>

<style lang="scss" scoped>
@import "./scss/StarsAndCommentsBar.scss";
</style>
