<template>
  <div class="hello">
    <button @click="setNum">点我</button>
     {{count}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    setNum(){
      this.$store.dispatch('increment')
    }
  },
  // 用计算属性获取状态
  computed:{
    count(){
      return this.$store.state.num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
