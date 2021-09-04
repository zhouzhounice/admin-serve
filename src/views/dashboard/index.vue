<template>
  <div class="dashboard-container">
    <Analyse />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Analyse from './analyse/index.vue'

export default {
  name: 'Dashboard',
  components: {
    Analyse
  },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped></style>
