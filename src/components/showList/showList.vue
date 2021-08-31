<template>
  <div>
    <!-- 添加按钮 -->
    <el-button type="primary" icon="el-icon-plus">添加SPU</el-button>
    <!-- 商品显示列表 -->
    <el-table border style="width: 100%;margin:20px 0">
      <el-table-column label="序号" width="80" align="center" type="index" />
      <el-table-column
        label="SPU名称"
        width="200"
        align="center"
        prop="tmName"
      />
      <el-table-column label="SPU描述" align="center"> </el-table-column>
      <el-table-column label="操作">
        <template>
          <div>
            <el-button type="warning" size="mini" icon="el-icon-edit"
              >编辑</el-button
            >
            <el-button size="mini" type="danger" icon="el-icon-delete"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页模块 -->
    <el-pagination
      style="text-align:left"
      :total="total"
      :current-page="page"
      :page-size="limit"
      :page-sizes="[2, 4, 6]"
      layout="prev,pager,next,jumper,->,sizes,total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>
<script>
export default {
  name: 'ShowList',
  data() {
    return {
      total: 3,
      page: 1,
      limit: 1
    }
  },
  methods: {
    handleCurrentChange() {},
    handleSizeChange() {}
  }
}
</script>
<style lang=""></style>
