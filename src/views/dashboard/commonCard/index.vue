<template>
  <el-card class="common-card">
    <div class="card-header">
      <div>{{ title }}</div>
      <svg
        t="1628558206925"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1972"
        width="16"
        height="16"
      >
        <path
          d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m0 896A384 384 0 0 1 512 128a384 384 0 0 1 0 768z m29.696-194.88c-11.136 10.112-24.96 17.344-31.488 15.36-6.08-1.792-9.536-7.424-8.384-13.056l89.344-248c7.424-31.488-12.736-60.16-55.424-63.872-44.8 0-110.976 40.128-151.232 90.944 0 6.08-1.344 21.12 0.128 30.208l53.632-54.208c11.008-10.176 23.808-17.344 30.336-15.424 6.592 1.92 10.112 8.384 8 14.464l-88.704 246.848c-10.176 28.864 9.152 57.152 56.192 63.616 68.928 0 109.888-39.168 150.208-89.984 0-6.08 2.368-22.08 0.96-31.104l-53.568 54.208zM575.744 192c-35.584 0-64.448 25.728-64.448 63.808 0 37.952 28.864 63.744 64.448 63.744 35.648 0 64.448-25.728 64.448-63.744 0-38.08-28.8-63.808-64.448-63.808z"
          p-id="1973"
          fill="#bfbfbf"
        />
      </svg>
    </div>
    <div class="card-value">{{ charts }}</div>
    <div class="card-charts">
      <div class="card-charts-wrap">
        <slot />
      </div>
    </div>
    <div class="card-footer">
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
<style>
.el-card__body {
  padding: 10px;
}
.common-card {
  margin-bottom: 10px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.card-value {
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
  margin-bottom: 30px;
}
.card-charts-wrap {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 14px;
}
.card-footer {
  margin-top: 8px;
  padding-top: 9px;
  border-top: 1px solid #f0f0f0;
}
</style>
