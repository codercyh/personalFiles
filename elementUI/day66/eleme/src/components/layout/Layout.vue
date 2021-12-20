<template>
  <el-container class = "container">
    <el-header></el-header>
    <el-body></el-body>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    'el-header': Header,
    'el-body': Body,
    'el-footer': Footer
  }
}
</script>

<style scoped>

</style>
