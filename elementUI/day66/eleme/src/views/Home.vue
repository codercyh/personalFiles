<template>
  <div class = "home" v-if = "!$route.meta.isLogin">
    <v-layout></v-layout>
  </div>
</template>

<script>
import Layout from '../components/layout/Layout'

export default {
  name: 'Home',
  data () {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    'v-layout': Layout
  }
}
</script>
<style scoped lang = "scss">
.home {
  height: 100%;
  overflow: hidden;
}

.home /deep/ .container {
  height: 100%;
}
</style>
