<template>
  <div class="cart">
    <h3>this is 购物车页面</h3>
    <Footly :index="3"></Footly>
  </div>
</template>

<script>
import { Footly } from "../layout/components";
export default {
  name: "cart",
  data() {
    return {
      msg: 'this is msg',
    };
  },
  components: {
    Footly
  },
  created() {
    console.log('createdcart');
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.cart {
  background: #fff;
  padding: 10px;
}
</style>

