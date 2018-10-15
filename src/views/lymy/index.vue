<template>
  <div class="my">
    <h3>this is 我的</h3>
    <Footly :index="4"></Footly>
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
    console.log('createdmy');
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.my {
  background: #fff;
  padding: 10px;
}
</style>

