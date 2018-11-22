<template>
  <div class="my">
    <h3>this is 详情页</h3>
    <div class="buy">立即购买</div>

  </div>
</template>

<script>

export default {
  name: "goodsdetail",
  data() {
    return {
      msg: 'this is msg',
    };
  },
  created() {
    console.log('createdclassifylistdetail');
    console.log(this.$store);
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.my {
  background: #fff;
  padding: 10px;
}
.buy {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  z-index: 200;
  background: greenyellow;
}
</style>

