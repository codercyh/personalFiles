<template>
  <div id = "app">
    <Home></Home>
    <keep-alive>
      <router-view v-if = "$route.meta.isLogin"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    Home
  }
}
</script>

<style scoped lang = "scss">

</style>
