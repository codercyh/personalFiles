<template>
  <el-header class = "header">
    <el-menu
        class = "el-menu-demo"
        mode = "horizontal"
        background-color = "#545c64"
        text-color = "#fff"
        active-text-color = "#ffd04b">
      <el-menu-item index = "1" class = "logo">火影忍者疾风传</el-menu-item>
      <el-submenu index = "2" class = "user-info">
        <template slot = "title">漩涡鸣人</template>
        <el-menu-item index = "2-1">查看信息</el-menu-item>
        <el-menu-item index = "2-2">更改密码</el-menu-item>
        <el-menu-item index = "2-3">退出系统</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang = "scss">
.header {
  padding: 0;

  .user-info {
    float: right;
  }
}
</style>
