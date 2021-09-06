<template>
  <div class="line-chart" ref="chart"></div>
</template>

<script>
// 1. 引入echarts js文件
import * as echarts from 'echarts'
// 2. 准备一个具备宽高的容器
// 3. 创建echarts实例
// 4. 定义option
// 5. 调用setOption方法来生成图表
export default {
  name: 'LineChart',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: '#975fe4'
    }
  },
  mounted() {
    const { color, data } = this
    const myChart = echarts.init(this.$refs.chart)
    const option = {
      xAxis: {
        type: 'category',
        // 不显示
        show: false
      },
      yAxis: { show: false },
      series: {
        type: 'line',
        data,
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
                color // 0% 处的颜色
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
          color
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
    }
    myChart.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 46px;
}
</style>
