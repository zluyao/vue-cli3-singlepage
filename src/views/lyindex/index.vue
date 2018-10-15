<template>
  <div class="home">
    <h3>this is 首页</h3>
    <p>{{msg}}</p>

    <Footly :index="1"></Footly>
  </div>
</template>

<script>
import { Footly } from "../layout/components";
export default {
  name: "home",
  data() {
    return {
      msg: 'this is msg',
    };
  },
  components: {
    Footly
  },
  created() {
    console.log('createdhome');
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  background: #fff;
  padding: 10px;
}
</style>

