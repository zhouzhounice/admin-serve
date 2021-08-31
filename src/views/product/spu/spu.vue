<template lang="">
  <div>
    <el-card class="box-card" style="margin:0 20px">
      <CategorySelector></CategorySelector>
    </el-card>
    <el-card class="box-card" style="margin:10px 20px">
      <!-- 添加按钮 -->
      <el-button type="primary" icon="el-icon-plus">添加SPU</el-button>
      <ShowSpuList></ShowSpuList>
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
  name: 'SPU'
}
</script>
<style lang=""></style>
