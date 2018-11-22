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
import { mapState, mapMutations, mapActions } from 'vuex';
import { Footly } from "../layout/components";
console.log(22, mapState);
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
  computed: {
    ...mapState(['classify'])
  },
  methods: {
    ...mapMutations(['setType', 'setPageNo']),
    ...mapActions(['setTypeA']),
    toDetail(n) {
      // this.setType(n); //提交mutations
      this.setTypeA(n); // 派发一个actions  actions里面本质是一个异步里面提交一个mutations
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
    console.log(this.$store);
    console.log(this);
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

