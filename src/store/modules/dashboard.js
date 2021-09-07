import { getChartsData } from '@/api/reqCharts'

const state = {
  chartsData: {}
}

const mutations = {
  GET_CHARTS_DATA: (state, chartsData) => {
    state.chartsData = chartsData
  }
}

const actions = {
  async getChartsData({ commit }) {
    const { data } = await getChartsData()
    commit('GET_CHARTS_DATA', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
