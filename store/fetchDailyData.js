export const state = () => ({
  DailyData: [],
})

export const mutations = {
  setFetchDailyData(state, fetchDailyData) {
    state.DailyData = fetchDailyData
  },
}

export const actions = {
  setFetchDailyData({ commit }, fetchDailyData) {
    commit('setFetchDailyData', fetchDailyData)
  },
}

export const getters = {
  fetchDailyData: (state) => {
    return state.fetchDailyData
  },
}