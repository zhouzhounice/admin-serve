<template>
  <el-card>
    <template #header>
      <div class="hot-search-title">
        <span>线上热门搜索</span>
        <i class="el-icon-more"></i>
      </div>
    </template>

    <el-row :gutter="30">
      <el-col :lg="12" :md="24">
        <div class="hot-search-name">
          <span>搜索用户数</span>
          <svg
            t="1630717979821"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3776"
            width="22"
            height="22"
          >
            <path
              d="M512 179.2a332.8 332.8 0 1 1 0 665.6 332.8 332.8 0 0 1 0-665.6z m0 51.2a281.6 281.6 0 1 0 0 563.2 281.6 281.6 0 0 0 0-563.2z"
              p-id="3777"
              fill="#bfbfbf"
            />
            <path
              d="M512.768 339.968a38.7072 38.7072 0 1 1 0 77.3632 38.7072 38.7072 0 0 1 0-77.3632zM546.4576 678.6048h-27.2384c-14.2848 0-29.0304-12.3904-29.0304-23.7056V498.0224h-9.728a25.8048 25.8048 0 1 1 0-51.6096s31.488-0.1024 32.3072 0c13.1072 0.9728 22.5792 6.656 22.5792 17.3568v163.2768h11.1104a25.8048 25.8048 0 1 1 0 51.5584z"
              p-id="3778"
              fill="#bfbfbf"
            />
          </svg>
        </div>

        <div>
          <span class="hot-search-number">12321</span>
          <span class="hot-search-percent">17.1</span>
          <svg
            t="1630719348891"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4736"
            width="16"
            height="16"
          >
            <path
              d="M855.16288 682.99776 171.14112 682.99776l342.016-341.99552L855.16288 682.99776z"
              p-id="4737"
              fill="#d81e06"
            ></path>
          </svg>
        </div>

        <LineChart
          :data="[22, 12, 33, 15, 28, 44, 11, 23, 37]"
          color="#5b8ff9"
        />
      </el-col>

      <el-col :lg="12" :md="24">
        <div class="hot-search-name">
          <span>搜索用户数</span>
          <svg
            t="1630717979821"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3776"
            width="22"
            height="22"
          >
            <path
              d="M512 179.2a332.8 332.8 0 1 1 0 665.6 332.8 332.8 0 0 1 0-665.6z m0 51.2a281.6 281.6 0 1 0 0 563.2 281.6 281.6 0 0 0 0-563.2z"
              p-id="3777"
              fill="#bfbfbf"
            />
            <path
              d="M512.768 339.968a38.7072 38.7072 0 1 1 0 77.3632 38.7072 38.7072 0 0 1 0-77.3632zM546.4576 678.6048h-27.2384c-14.2848 0-29.0304-12.3904-29.0304-23.7056V498.0224h-9.728a25.8048 25.8048 0 1 1 0-51.6096s31.488-0.1024 32.3072 0c13.1072 0.9728 22.5792 6.656 22.5792 17.3568v163.2768h11.1104a25.8048 25.8048 0 1 1 0 51.5584z"
              p-id="3778"
              fill="#bfbfbf"
            />
          </svg>
        </div>

        <div>
          <span class="hot-search-number">12321</span>
          <span class="hot-search-percent">17.1</span>
          <svg
            t="1630719348891"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4736"
            width="16"
            height="16"
          >
            <path
              d="M855.16288 682.99776 171.14112 682.99776l342.016-341.99552L855.16288 682.99776z"
              p-id="4737"
              fill="#d81e06"
            ></path>
          </svg>
        </div>

        <LineChart
          :data="[22, 12, 33, 15, 28, 44, 11, 23, 37]"
          color="#5b8ff9"
        />
      </el-col>
    </el-row>

    <el-table :data="[]" border class="hot-seatch-table">
      <el-table-column prop="date" label="排名" width="80"> </el-table-column>
      <el-table-column prop="name" label="搜索关键字"> </el-table-column>
      <el-table-column prop="name" label="用户数" sortable> </el-table-column>
      <el-table-column prop="address" label="周涨幅" sortable>
      </el-table-column>
    </el-table>

    <el-pagination
      class="hot-search-pagination"
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import LineChart from '@/components/LineChart'

export default {
  name: 'HotSearch',
  components: {
    LineChart
  }
}
</script>

<style lang="scss" scoped>
.hot-search-title {
  display: flex;
  justify-content: space-between;
}
.hot-search-name {
  display: flex;
  align-items: center;
  color: gray;
  font-size: 16px;
  margin-bottom: 10px;
  span {
    margin-right: 10px;
  }
}
.hot-search-number {
  font-size: 25px;
  margin-right: 30px;
}
.hot-search-percent {
  color: gray;
  margin-right: 5px;
}
.hot-seatch-table {
  margin: 20px 0 10px;
}
.hot-search-pagination {
  float: right;
  margin-bottom: 10px;
}
</style>
