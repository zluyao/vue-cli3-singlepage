<template>
  <div class="classify">
    <h3>this is 分类页面</h3>
    <ul>
      <li class="item"
          @click="toList">type1</li>
      <li class="item"
          @click="toList">type2</li>
      <li class="item"
          @click="toList">type3</li>
      <li class="item"
          @click="toList">type4</li>
    </ul>
    <Footly :index="2"></Footly>
  </div>
</template>

<script>
import { Footly } from "../layout/components";
export default {
  name: "classify",
  data() {
    return {
      msg: 'this is msg',
    };
  },
  components: {
    Footly
  },
  methods: {
    toList() {
      this.$router.push({
        path: '/classify/list'
      });
    },
  },
  created() {
    console.log('createdclassify');
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.classify {
  background: #fff;
  padding: 10px;
  ul {
    padding: 0;
  }
  .item {
    padding-left: 10px;
    list-style: none;
    line-height: 30px;
    margin-bottom: 10px;
    background: #ddd;
  }
}
</style>

