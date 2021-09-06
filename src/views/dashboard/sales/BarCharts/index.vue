<template>
  <div class="charts" ref="charts">
    barcharts...
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BarCharts',
  mounted() {
    const myCharts = echarts.init(this.$refs.charts)
    const options = {
      title: {
        text: '访问量趋势',
        textStyle: {
          fontSize: 14
        },
        top: 0
      },
      xAxis: {
        data: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ]
      },
      yAxis: {},
      series: {
        name: '销售量',
        type: 'bar',
        data: [22, 12, 33, 15, 28, 44, 11, 23, 37, 33, 15, 28, 44],
        barWidth: 30
      },
      grid: {
        left: 0,
        right: '5%',
        top: '15%',
        bottom: 0,
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            width: 50,
            color: 'rgba(0, 0, 0, .1)'
          }
        }
      }
    }
    myCharts.setOption(options)
  }
}
</script>
<style scoped>
.charts {
  padding: 20px;
  width: 100%;
  height: 280px;
}
</style>
