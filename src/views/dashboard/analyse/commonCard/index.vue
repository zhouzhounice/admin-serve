<template>
  <el-card class="common-card">
    <div class="card-header">
      <span>{{ title }}</span>
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
    <div class="card-number">
      {{ charts }}
    </div>
    <div class="card-chart">
      <!-- 默认插槽 -->
      <div class="card-chart-wrap">
        <slot />
      </div>
    </div>
    <div class="card-footer">
      <!-- 具名插槽 -->
      <slot name="footer" />
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: String,
    charts: String
  }
}
</script>

<style lang="scss" scoped>

.common-card {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  padding: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.card-number {
  height: 38px;
  margin-top: 4px;
  margin-bottom: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-size: 30px;
  line-height: 38px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.card-charts {
  position: relative;
  height: 46px;
  margin-bottom: 12px;
  font-size: 14px;
}
.card-charts-wrap {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
.card-footer {
  margin-top: 8px;
  padding-top: 9px;
  border-top: 1px solid #f0f0f0;
}
</style>
