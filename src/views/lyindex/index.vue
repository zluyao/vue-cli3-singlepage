<template>
  <div class="home">
    <h3>this is 首页</h3>
    <p>{{msg}}</p>

    <Footly :index="1"></Footly>
  </div>
</template>

<script>
import { Footly } from "../layout/components";
import Deferred from "@lenic/deferred";
import Aa from "@zluyao/deferred";
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
  mounted() {
    this.$post('/admin/login', {
      account: '18258817916',
      password: 'e10adc3949ba59abbe56e057f20f883e'
    }).then((res) => {
      console.log(11);
      console.log(res);
    })

    setTimeout(() => {
      this.$post('/admin/login', {
        account: '18258817916',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      }).then((res) => {
        console.log(22);
        console.log(res);
      })
    }, 50)
  },
  created() {
    console.log('createdhome');
    const deferred = Deferred();
    deferred.promise.then(v => console.log(v), e => console.error(e));

    deferred.resolve('hello world'); // hello world
    deferred.reject('error message'); // error message
    console.log('******');
    const aa = Aa();
    aa.promise.then(v => console.log('sucess: ' + v), e => console.error(e));
    aa.resolve(1024);
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  background: #fff;
  padding: 10px;
}
</style>

