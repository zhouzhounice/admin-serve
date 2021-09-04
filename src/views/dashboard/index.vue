<template>
  <div class="dashboard-container">
    <Analyse />
    <Sales />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Analyse from './analyse/index.vue'
import Sales from './sales/index.vue'

export default {
  name: 'Dashboard',
  components: {
    Analyse,
    Sales
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
