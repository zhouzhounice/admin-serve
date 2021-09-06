<template>
  <el-card class="sales-volume">
    <template #header>
      <div class="sales-volume-title">
        <span>线上热门搜索</span>
        <el-radio-group v-model="radio" size="mini">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上"></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </div>
    </template>
    <PieChart />
  </el-card>
</template>

<script>
import PieChart from './pieChart'

export default {
  name: 'SalesVolume',
  data() {
    return {
      radio: '全部渠道'
    }
  },
  components: {
    PieChart
  }
}
</script>

<style>
.sales-volume-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
