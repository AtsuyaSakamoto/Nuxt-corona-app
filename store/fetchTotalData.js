export const state = () => ({
  TotalData: [],
})

export const mutations = {
  setFetchTotalData(state, fetchTotalData) {
    state.TotalData = fetchTotalData
  },
}

export const actions = {
  setFetchTotalData({ commit }, fetchTotalData) {
    commit('setFetchTotalData', fetchTotalData)
  },
}

export const getters = {
  fetchTotalData: (state) => {
    return state.TotalData
  },
}
