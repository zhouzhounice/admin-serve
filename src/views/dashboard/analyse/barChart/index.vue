<template>
  <!-- 1.准备一个容器 -->
  <div ref="echarts" class="echarts"></div>
</template>

<script>
// 2. 引入echarts
import * as echarts from 'echarts'
export default {
  name: 'BarChart',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    data(data) {
      // 4.调整图标样式
      const option = {
        xAxis: {
          type: 'category',
          // 不显示横坐标
          show: false
        },
        yAxis: {
          // 不显示纵坐标
          show: false
        },
        series: {
          // 坐标轴类型 柱状图
          type: 'bar',
          // 图表数据
          data,
          // 图表为静态 没有交互
          slient: true
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
      // 5.调用函数 显示图表
      this.myECharts.setOption(option)
    }
  },
  mounted() {
    // 3.初始化一个图表
    this.myECharts = echarts.init(this.$refs.echarts)
  }
}
</script>
<style scoped>
.echarts {
  width: 100%;
  height: 46px;
}
</style>
