<template lang="">
  <div>
    <el-card class="box-card" style="margin:0 20px">
      <CategorySelector></CategorySelector>
    </el-card>
    <el-card class="box-card" style="margin:10px 20px">
      <!-- 添加按钮 -->
      <el-button type="primary" icon="el-icon-plus">添加属性</el-button>
      <ShowAttrList></ShowAttrList>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Attr'
}
</script>
<style lang=""></style>
