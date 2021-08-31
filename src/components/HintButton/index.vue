<template>
  <el-tooltip :content="title" placement="top">
    <el-button size="mini" v-bind="$attrs" v-on="$listeners"></el-button>
  </el-tooltip>
</template>
<script>
export default {
  name: 'HintButton',
  props: ['title'],
  methods: {}
}
</script>
<style lang=""></style>
