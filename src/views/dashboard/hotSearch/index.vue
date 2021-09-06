<template>
  <div class="search-content">
    <el-card class="content-left">
      <div slot="header" class="card-heard">线上热门搜索</div>
      <div></div>
    </el-card>
    <el-card class="content-right">
      <div slot="header" class="card-heard">线上热门搜索</div>
      <div></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HotSearch'
}
</script>
<style scoped>
.search-content {
  display: flex;
  justify-content: space-between;
}
.content-left,
.content-right {
  width: 50%;
}
</style>
