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
      yAxis: {
        type: 'category',
        show: false
      },
      series: {
        type: 'bar',
        data: [78],
        // 坐标轴是否是静态无法交互
        silent: true,
        // 显示背景颜色
        showBackground: true,
        // 柱条的样式
        itemStyle: {
          color: 'greenyellow'
        },
        // 柱条的宽度
        barWidth: 10,
        label: {
          show: true,
          formatter: '|',
          color: 'greenyellow',
          position: 'right'
        }
      },
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
    myEcharts.setOption(options)
  }
}
</script>
<style scoped>
.echarts {
  width: 100%;
  height: 46px;
}
</style>
