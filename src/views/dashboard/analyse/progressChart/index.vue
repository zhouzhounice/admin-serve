<template>
  <div class="echarts" ref="echarts">
    BarEcharts...
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ProgressChart',
  mounted() {
    const myEcharts = echarts.init(this.$refs.echarts)
    const options = {
      xAxis: {
        show: false,
        min: 0,
        max: 100
      },
      yAyis: {
        type: 'bar'
      }
    }
    myEcharts.setOption(options)
  }
}
</script>
<style>
.echarts {
  width: 100%;
  height: 46px;
}
</style>
