<template>
  <div class="ly-main-container">
    <app-main></app-main>
  </div>

</template>

<script>
import { AppMain } from "./components";

export default {
  name: "layout",
  components: {
    AppMain
  },
  created() {
    console.log('createdlayout');
  },
  mounted() {
    console.log(123);
  },
  methods: {
    
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.ly-main-container {
  max-height: 100%;
  padding-bottom: 40px;
}

</style>
