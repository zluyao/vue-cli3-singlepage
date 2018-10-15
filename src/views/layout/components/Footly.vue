<template>
  <div class="lyfoot">
    <span @click="toHome"
          :class="{active:index==1}"
          class="home-btn">首页</span>
    <span @click="toClassify"
          :class="{active:index==2}"
          class="classify-btn">分类</span>
    <span @click="toCart"
          :class="{active:index==3}"
          class="cart-btn">购物车</span>
    <span @click="toMy"
          :class="{active:index==4}"
          class="my-btn">我的</span>
  </div>
</template>

<script>
export default {
  name: 'Footly',
  data() {
    return {
    }
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
  },
  methods: {
    toHome() {
      this.$router.push({
        path: '/home'
      })
    },
    toClassify() {
      this.$router.push({
        path: '/classify'
      })
    },
    toCart() {
      this.$router.push({
        path: '/cart'
      })
    },
    toMy() {
      this.$router.push({
        path: '/my'
      })
    },
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.lyfoot {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #666;
  > span {
    height: 100%;
    width: 25%;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
  .active {
    color: red;
  }
}
</style>
