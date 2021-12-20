<template>
  <el-container class = "main">
    <v-left></v-left>
    <v-main></v-main>
  </el-container>
</template>

<script>
import Left from './Left'
import Main from './Main'

export default {
  name: 'Body',
  components: {
    'v-left': Left,
    'v-main': Main
  }
}
</script>

<style scoped>

</style>
