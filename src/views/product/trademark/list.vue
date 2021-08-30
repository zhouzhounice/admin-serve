<template lang="">
  <div>
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    <el-table border style="width: 100%;margin:20px 0">
      <el-table-column label="序号" width="80" align="center" />
      <el-table-column label="品牌名称" align="center" />
      <el-table-column label="品牌LOGO" align="center" />
      <el-table-column label="操作" align="center" />
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
      total: 15
    }
  }
}
</script>
<style lang=""></style>
