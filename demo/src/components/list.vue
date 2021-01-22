<template>
  <div>
    <router-link :to="{name:'helloworld', params:{msg1:123}}">Hello World</router-link>  |
    <router-link :to="{name:'hellouniverse', params:{msg2:456}}">Hello Universe</router-link>
  </div>
</template>

<script lang="ts">

export default
{
  name: 'list'
}
</script>

<style lang="scss" scoped>

</style>