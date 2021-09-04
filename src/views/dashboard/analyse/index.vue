<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="8" :lg="6" class="context">
      <CommonCard title="总销售额" charts="￥12566">
        <!-- 默认插槽 -->
        <div class="percent">
          <span>
            周同比
            <span class="percent-value">55.67%</span>
          </span>
          <svg
            t="1628558608250"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5011"
            width="8"
            height="8"
          >
            <path
              d="M77.01369341 651.62563145L465.92050279 226.34930347a61.20218114 61.20218114 0 0 1 45.97224413-20.80173438A61.20218114 61.20218114 0 0 1 557.86856617 226.34930346L946.773588 651.62563145c18.98558228 20.05275039 24.85232562 49.27921402 15.04045657 75.09324227s-33.49334857 43.83969546-61.01448826 46.29221581l-777.49364709 0c-27.62660522-2.34705484-51.41176271-20.26546899-61.22541931-46.1867503-9.92090966-25.91949376-4.05416635-55.03870431 14.9332035-75.19870778z"
              p-id="5012"
              fill="#d81e06"
            />
          </svg>
          <span class="subtext"> 日同比<span class="text">23.45% </span> </span>
          <svg
            t="1628558630690"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5276"
            width="8"
            height="8"
          >
            <path
              d="M919.8 381.1L555.2 779.8a57.377 57.377 0 0 1-43.1 19.5c-16.5 0-32.2-7.1-43.1-19.5L104.4 381.1c-17.8-18.8-23.3-46.2-14.1-70.4s31.4-41.1 57.2-43.4h728.9c25.9 2.2 48.2 19 57.4 43.3 9.3 24.3 3.8 51.6-14 70.5z"
              p-id="5277"
              fill="#1afa29"
            />
          </svg>
        </div>
        <template #footer>
          <span>日销售额￥ </span>
        </template>
      </CommonCard>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" class="context">
      <CommonCard title="访问量" charts="88460">
        <LineChart />
        <template #footer>
          <span>日访问量 </span>
        </template>
      </CommonCard>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" class="context">
      <CommonCard title="支付笔数" charts="12306">
        <template #footer>
          <span>转化率 65%</span>
        </template>
      </CommonCard>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" class="context">
      <CommonCard title="运营活动效果" charts="78%">
        <template #footer>
          <div class="percent">
            <span>
              周同比
              <span class="percent-value">55.67%</span>
            </span>
            <svg
              t="1628558608250"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5011"
              width="8"
              height="8"
            >
              <path
                d="M77.01369341 651.62563145L465.92050279 226.34930347a61.20218114 61.20218114 0 0 1 45.97224413-20.80173438A61.20218114 61.20218114 0 0 1 557.86856617 226.34930346L946.773588 651.62563145c18.98558228 20.05275039 24.85232562 49.27921402 15.04045657 75.09324227s-33.49334857 43.83969546-61.01448826 46.29221581l-777.49364709 0c-27.62660522-2.34705484-51.41176271-20.26546899-61.22541931-46.1867503-9.92090966-25.91949376-4.05416635-55.03870431 14.9332035-75.19870778z"
                p-id="5012"
                fill="#d81e06"
              />
            </svg>
            <span class="subtext">
              日同比<span class="text">23.45% </span>
            </span>
            <svg
              t="1628558630690"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5276"
              width="8"
              height="8"
            >
              <path
                d="M919.8 381.1L555.2 779.8a57.377 57.377 0 0 1-43.1 19.5c-16.5 0-32.2-7.1-43.1-19.5L104.4 381.1c-17.8-18.8-23.3-46.2-14.1-70.4s31.4-41.1 57.2-43.4h728.9c25.9 2.2 48.2 19 57.4 43.3 9.3 24.3 3.8 51.6-14 70.5z"
                p-id="5277"
                fill="#1afa29"
              />
            </svg>
          </div>
        </template>
      </CommonCard>
    </el-col>
  </el-row>
</template>

<script>
import CommonCard from './commonCard'
import LineChart from './lineChart/index.vue'
export default {
  name: 'Analyse',
  components: { CommonCard, LineChart }
}
</script>
<style lang="scss" scoped>
.percent {
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
}
.percent-value {
  margin-left: 8px;
  margin-right: 3px;
}
</style>
