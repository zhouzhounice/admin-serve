<template>
  <div class="pie-chart" ref="chart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'PieChart',
  mounted() {
    const myChart = echarts.init(this.$refs.chart)
    const option = {
      title: {
        text: '搜索引擎',
        subtext: 1048,
        left: 'center',
        top: '43%',
        textStyle: {
          fontSize: 14,
          fontWeight: 200
        },
        subtextStyle: {
          fontSize: 30
        },
        padding: 0
      },
      series: {
        type: 'pie',
        data: [
          {
            name: '搜索引擎',
            value: 1048
          },
          {
            name: '直接访问',
            value: 735
          },
          {
            name: '邮件营销',
            value: 580
          },
          {
            name: '联盟广告',
            value: 484
          },
          {
            name: '视频广告',
            value: 300
          }
        ],
        // 增加白色线，分隔图形
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        // 显示的文字
        label: {
          formatter: '{b}: {c}'
        },
        // 内外圆半径
        radius: ['40%', '70%']
      }
    }
    myChart.setOption(option)

    myChart.on('mouseover', params => {
      const { name, value } = params.data
      // 可以只更新需要更新的部分
      myChart.setOption({
        title: {
          text: name,
          subtext: value
        }
      })
    })
  }
}
</script>

<style scoped>
.pie-chart {
  width: 100%;
  height: 300px;
}
</style>
