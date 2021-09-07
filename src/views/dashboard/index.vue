<template>
  <div class="dashboard-container">
    <Analyse />
    <Sales />
    <Monitor />
    <Map />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Analyse from './analyse/index.vue'
import Sales from './sales/index.vue'
import Monitor from './monitor/index.vue'
import Map from './map/index.vue'

export default {
  name: 'Dashboard',
  components: {
    Analyse,
    Sales,
    Monitor,
    Map
  },
  methods: {
    ...mapActions('dashboard', ['getChartsData'])
  },
  mounted() {
    console.log(this.getChartsData())
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
