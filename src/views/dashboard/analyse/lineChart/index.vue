<template>
  <!-- 2.准备一个容器 -->
  <div ref="line" class="charts" />
</template>

<script>
// 1.引入ECharts
import * as echarts from 'echarts'
export default {
  name: 'LineChart',
  mounted() {
    this.myEcharts = echarts.init(this.$refs.line)
    this.myEcharts.setOption({
      xAxis: {
        type: 'category',
        // 不显示
        show: false
      },
      yAxis: { show: false },
      series: {
        type: 'line',
        data: [22, 12, 33, 15, 28, 44, 11, 23, 37],
        // 平滑曲线显示
        smooth: true,
        // 折线拐点的样式
        itemStyle: {
          opacity: 0
        },
        // 区域的样式
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#975fe4' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#fff' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        // 线的样式
        lineStyle: {
          color: '#975fe4'
        },
        // 坐标轴是否是静态无法交互
        silent: true
      },
      grid: {
        left: -20,
        right: -20,
        top: 0,
        bottom: 0
      }
    })
  }
}
</script>
<style scoped>
.charts {
  width: 100%;
  height: 46px;
}
</style>
