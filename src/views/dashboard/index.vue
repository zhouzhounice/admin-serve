<template>
  <div class="dashboard-container">
    <Analyse />
    <Sales />
    <HotSearch />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Analyse from './analyse/index.vue'
import Sales from './sales/index.vue'
import HotSearch from './hotSearch/index.vue'

export default {
  name: 'Dashboard',
  components: {
    Analyse,
    Sales,
    HotSearch
  },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  margin: -10px;
}
</style>
