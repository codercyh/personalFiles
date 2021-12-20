<template>
  <div class="about">
    <el-table :data="stuList">
      <el-table-column label="编号" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="状态" prop="status">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status===1" type="success">可用</el-button>
          <el-button v-else type="danger">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope = "scope">
          <el-button type="button" @click="update(scope.row.id)">修改</el-button>
          <el-button type="button" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
const stuList = [{
  id: 1,
  name: '单仁杰',
  age: 20,
  sex: '男',
  status: 1
},
{
  id: 2,
  name: '曹宇杭',
  age: 23,
  sex: '男',
  status: 1
},
{
  id: 3,
  name: '张三丰',
  age: 19,
  sex: '女',
  status: 1
},
{
  id: 4,
  name: '吴彦祖',
  age: 40,
  sex: '男',
  status: 0
}]
export default {
  data () {
    return {
      stuList
    }
  },
  methods: {
    update (id) {
      this.$alert(`您修改了编号为${id}的值`)
    },
    del (id) {
      this.$confirm(`确定删除编号为${id}的数据吗`).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      })
    }
  }
}
</script>
