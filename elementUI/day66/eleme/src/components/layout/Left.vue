<template>
  <el-aside>
    <el-menu style = "height: 100%" router
             default-active = "2"
             class = "el-menu-vertical-demo"
             background-color = "#545c64"
             text-color = "#fff"
             active-text-color = "#ffd04b">
      <el-submenu index = "1">
        <template slot = "title">
          <i class = "el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index = "about">关于我们</el-menu-item>
          <el-menu-item index = "1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index = "2">
        <i class = "el-icon-menu"></i>
        <span slot = "title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Left'
}
</script>

<style scoped lang = "scss">

</style>
