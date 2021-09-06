<template>
  <el-card>
    <div class="chart-top">
      <el-tabs v-model="activeName">
        <el-tab-pane label="销售额" name="first" />
        <el-tab-pane label="访问量" name="second" />
      </el-tabs>
      <div class="chart-top-right">
        <span>今日</span>
        <span>本周</span>
        <span>本月</span>
        <span>本年</span>
        <el-date-picker
          v-model="value1"
          size="mini"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
    </div>
    <div class="chart-content">
      <div class="content-charts">
        <BarCharts />
      </div>
      <div class="content-list">
        <p>门店访问量排名</p>
        <ul>
          <li>
            <span class="bgc">1</span>
            <span>xxx</span>
            <span>123321</span>
          </li>
          <li>
            <span class="bgc">2</span>
            <span>xxx</span>
            <span>123321</span>
          </li>
          <li>
            <span class="bgc">3</span>
            <span>xxx</span>
            <span>123321</span>
          </li>
          <li>
            <span>4</span>
            <span>xxx</span>
            <span>123321</span>
          </li>
          <li>
            <span>5</span>
            <span>xxx</span>
            <span>123321</span>
          </li>
          <li>
            <span>6</span>
            <span>xxx</span>
            <span>123321</span>
          </li>
        </ul>
      </div>
    </div>
  </el-card>
</template>

<script>
import BarCharts from './BarCharts/index.vue'
export default {
  name: 'Sales',
  components: {
    BarCharts
  },
  data() {
    return {
      activeName: 'second',
      value1: ''
    }
  },
  methods: {}
}
</script>
<style scoped>
.chart-top {
  padding-left: 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-top-right {
  padding-right: 20px;
}
.chart-top-right span {
  display: inline-block;
  margin-right: 20px;
  font-size: 14px;
}
.chart-content {
  height: 300px;
}
.content-charts {
  float: left;
  width: 70%;
}
.content-list {
  float: right;
  width: 30%;
}
.content-list p {
  font-size: 14px;
  color: #000;
}
.content-list ul {
  padding: 0;
  margin: 0;
}
.content-list ul li {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
}
.content-list ul li span:first-child {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  background-color: transparent;
}
.content-list ul li span.bgc {
  background-color: #000;
  color: #fff;
}
</style>
