<template>
  <div>
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    <el-table border style="width: 100%;margin:20px 0" :data="trademarkList">
      <el-table-column label="序号" width="80" align="center" type="index" />
      <el-table-column label="品牌名称" width="200" align="center" prop="tmName" />
      <el-table-column label="品牌LOGO" align="center">
        <template slot-scope="{ row }">
          <img :src="row.logoUrl" style="width:100px;height:80px">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <div>
            <el-button
              type="warning"
              size="mini"
              icon="el-icon-edit"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
            >删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align:center"
      :total="total"
      :current-page="page"
      :page-size="limit"
      :page-sizes="[4, 6, 8]"
      layout="prev,pager,next,jumper,->,sizes,total"
    />
  </div>
</template>
<script>
export default {
  name: 'TradeMark',
  data() {
    return {
      page: 1,
      limit: 3,
      total: 15,
      trademarkList: []
    }
  },
  mounted() {
    this.getTradeMark()
  },
  methods: {
    // 定义一个获取数据的方法
    async getTradeMark() {
      const { page, limit } = this
      const result = await this.$API.trademark.getTradeMark(page, limit)
      // 拿到请求到的数据之后 先将分页器数据应用
      const {
        data: { records, total }
      } = result
      this.total = total
      this.trademarkList = records
    }
  }
}
</script>
<style lang=""></style>
