<template lang="">
  <div>
    <el-card class="box-card" style="margin:0 20px">
      <CategorySelector></CategorySelector>
    </el-card>
    <el-card class="box-card" style="margin:10px 20px">
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
              <HintButton title="添加SPU" type="primary" icon="el-icon-plus" />
              <HintButton title="修改SPU" type="warning" icon="el-icon-edit" />
              <HintButton title="查看SKU" type="info" icon="el-icon-view" />
              <HintButton title="删除SKU" type="danger" icon="el-icon-delete" />
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
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'SPU',
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
