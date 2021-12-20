<template>
  <el-dialog title = "编辑窗口" :visible.sync = "visible">
    <el-form :model = "goodForm" ref = "goodForm" label-position = "right" label-width = "80px">
      <el-form-item label = "商品名">
        <el-input v-model = "goodForm.goodName" placeholder = "请输入商品名"></el-input>
      </el-form-item>
      <el-form-item label = "价格">
        <el-input v-model = "goodForm.price" placeholder = "请输入商品名"></el-input>
      </el-form-item>
      <el-form-item label = "库存">
        <el-input v-model = "goodForm.count" placeholder = "请输入商品名"></el-input>
      </el-form-item>
      <el-form-item label = "所在店铺">
        <el-input v-model = "goodForm.shop" placeholder = "请输入所在店铺"></el-input>
      </el-form-item>
      <el-form-item label = "商品类型">
        <el-select v-model = "goodForm.typeid" style = "width: 100%" placeholder = "请选择类型">
          <el-option v-for = "type in typeList" :key = "type.id" :label = "type.typeName"
                     :value = "type.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label = "商品简介">
        <el-input type = "textarea" v-model = "goodForm.info" placeholder = "请输入商品简介" rows = "4" show-word-limit
                  maxlength = "150" resize = "none">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot = "footer">
      <el-button @click = "visible=false">取消</el-button>
      <el-button type = "primary" @click = "submitForm">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddOrUpdate',
  data () {
    return {
      visible: false,
      goodForm: {},
      typeList: []
    }
  },
  methods: {
    init (id) {
      this.visible = true
      this.$axios.get('http://192.168.162.100:3000/good2/type').then(({ data }) => {
        this.typeList = data.typeList
        if (id) {
          this.$axios.get('http://192.168.162.100:3000/good2/info', { params: { id } }).then(({ data }) => {
            if (data.code > 0) {
              this.goodForm = data.data
            }
          })
        }
      })
    },
    submitForm () {
      this.$axios.post('http://192.168.162.100:3000/good2/doEdit', this.goodForm).then(({ data }) => {
        if (data.code > 0) {
          this.$message({
            type: 'success',
            message: '操作成功',
            onClose: () => {
              this.visible = false
              this.$emit('reloadTable')
            }
          })
        } else {
          this.$alert('操作失败', { type: 'error' })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
