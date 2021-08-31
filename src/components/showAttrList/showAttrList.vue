<template>
  <div>
    <!-- 商品显示列表 -->
    <el-table border style="width: 100%;margin:20px 0">
      <el-table-column label="序号" width="80" align="center" type="index" />
      <el-table-column
        label="属性名称"
        width="200"
        align="center"
        prop="tmName"
      />
      <el-table-column label="属性描述" align="center"> </el-table-column>
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
  </div>
</template>
<script>
export default {
  name: 'ShowList'
}
</script>
<style lang=""></style>
