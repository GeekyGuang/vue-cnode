<template>
  <div class="hello">
    <h1>Axios之Get请求</h1>
    <button @click="getData">获取数据</button>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios

export default {
  name: 'HelloWorld',
  methods:{
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics')
      .then(function(res){
        console.log(res)
      })
      .catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
