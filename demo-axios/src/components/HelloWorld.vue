<template>
  <div class="hello">
    <h1>Axios之Get请求</h1>
    <button @click="getData">获取数据</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios

export default {
  name: 'HelloWorld',
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getData(){
      const self = this
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page:1,
          limit:10
        }
      })
      .then(function(res){
        self.items = res.data.data
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
