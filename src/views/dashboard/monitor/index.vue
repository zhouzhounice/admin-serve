<template>
  <el-row :gutter="10">
    <el-col :lg="12" :md="24">
      <HotSearch />
    </el-col>
    <el-col :lg="12" :md="24">
      <SalesVolume />
    </el-col>
  </el-row>
</template>

<script>
import HotSearch from './hotSearch'
import SalesVolume from './salesVolume'

export default {
  name: 'Monitor',
  components: {
    HotSearch,
    SalesVolume
  }
}
</script>

<style></style>
