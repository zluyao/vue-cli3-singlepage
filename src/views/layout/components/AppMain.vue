<template>
  <section class="app-main">
    <!-- <transition name="slide-left"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 40px);
  position: relative;
  overflow: hidden;
}
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.3s;
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-active {
  transform: translateX(-100%);
}
</style>
