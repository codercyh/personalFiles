<template>
  <div class = "about">
    <el-page-header content = "商铺列表" @back = "$.router.go(-1)"></el-page-header>
    <el-card header = "筛选内容">
      <el-form :model = "searchForm" ref = "searchForm" inline>
        <el-form-item label = "商品名">
          <el-input v-model = "searchForm.goodName" placeholder = "请输入商品名" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model = "searchForm.typeid" placeholder = "请选择类型" clearable>
            <el-option label = "[请选择]"></el-option>
            <el-option label = "电子类" value = "1"></el-option>
            <el-option label = "食品类" value = "2"></el-option>
            <el-option label = "服装类" value = "3"></el-option>
            <el-option label = "运动类" value = "4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click = "getList()">查询</el-button>
          <el-button @click = "clearForm">清空</el-button>
          <el-button @click = "openWin()" type = "primary">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-table :data = "shopList">
      <el-table-column label = "编号" prop = "id" width = "50"/>
      <el-table-column label = "商品名" prop = "goodName"></el-table-column>
      <el-table-column label = "商品价格" prop = "price"></el-table-column>
      <el-table-column label = "商品库存" prop = "count"></el-table-column>
      <el-table-column label = "商品介绍" prop = "info" show-overflow-tooltip></el-table-column>
      <el-table-column label = "商品种类" prop = "typeName"></el-table-column>
      <el-table-column label = "所在商铺" prop = "shop"></el-table-column>
      <el-table-column label = "商铺状态" prop = "status">
        <template slot-scope = "scope">
          <el-tag type = "success" v-if = "scope.row.status === 1">可用</el-tag>
          <el-tag type = "danger" v-else>禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label = "操作" width = "200">
        <template slot-scope = "scope">
          <el-button type = "primary" size = "mini" @click = "openWin(scope.row.id)">修改</el-button>
          <el-button type = "danger" size = "mini" @click = "deleteRow(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout = "total,prev,pager,next,sizes,jumper" :total = "total" :current-page = "page"
                   :page-size = "limit" :page-sizes = "[5,10,20,30,50,100]" @size-change = "sizeChange"
                   @current-change = "currentChange">
    </el-pagination>
    <AddOrUpdate ref = "addOrUpdate" @reloadTable = getList()></AddOrUpdate>
  </div>
</template>

<script>
import AddOrUpdate from './good/AddOrUpdate'

export default {
  data () {
    return {
      shopList: [],
      total: 0,
      page: 1,
      limit: 5,
      searchForm: {
        goodName: '',
        typeid: ''
      }
    }
  },
  components: {
    AddOrUpdate
  },
  computed: {
    offset () {
      return (this.page - 1) * this.limit
    }
  },
  methods: {
    getList (offset = 0, limit = 5) {
      this.$axios.get('http://192.168.162.100:3000/good2/path', {
        params: {
          offset,
          limit,
          ...this.searchForm
        }
      }).then(({ data }) => {
        this.shopList = data.rows
        this.total = data.total
      })
    },
    openWin (id) {
      this.$refs.addOrUpdate.init(id)
    },
    deleteRow (id) {
      this.$confirm('确定删除该数据吗?').then(() => {
        this.$axios.post('http://192.168.162.100:3000/good2/delete', { id }).then(({ data }) => {
          if (data.code > 0) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.getList(this.offset, this.limit)
          } else {
            this.$alert('删除失败', { type: 'error' })
          }
        })
      })
    },
    sizeChange (val) {
      this.limit = val
      this.getList(this.offset, this.limit)
    },
    currentChange (val) {
      this.page = val
      this.getList(this.offset, this.limit)
    },
    clearForm () {
      this.searchForm = {}
      this.getList(this.offset)
    }
  },
  created () {
    this.getList()
  }
}
</script>
