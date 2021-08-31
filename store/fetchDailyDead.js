export const state = () => ({
  DailyDead: [],
})

export const mutations = {
  setFetchDailyDead(state, fetchDailyDead) {
    state.DailyDead = fetchDailyDead
  },
}

export const actions = {
  setFetchDailyDead({ commit }, fetchDailyDead) {
    commit('setFetchDailyDead', fetchDailyDead)
  },
}

export const getters = {
  fetchDailyDead: (state) => {
    return state.DailyDead
  },
}