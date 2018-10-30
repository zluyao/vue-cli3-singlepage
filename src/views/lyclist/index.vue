<template>
  <div class="classify">
    <h3>this is 列表页</h3>
    <ul>
      <li class="item"
          v-for="(n,index) in 20"
          @click="toDetail(n)"
          :key="index">
        <div>{{n}}</div>
      </li>
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
    toDetail(n) {
      this.$router.push({
        path: '/classify/list/goodsdetail',
        query: {
          id: n
        }
      });
    }
  },
  created() {
    console.log('createdclassifylist');
    console.log(11);
  },
  mounted() {
    console.log(22);
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.classify {
  background: #fff;
  padding: 10px 10px 50px 10px;

  ul {
    padding: 0;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }
  .item {
    padding: 8px;
    width: 50%;
    height: 200px;
    list-style: none;

    float: left;
    > div {
      height: 100%;
      background: #ddd;
      border-radius: 3px;
    }
  }
}
</style>

