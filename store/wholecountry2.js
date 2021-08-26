export const state = () => ({
  wholeCountry2Data: [],
})

export const mutations = {
  setWholeCountry2Data(state, wholeCountry2Data) {
    state.wholeCountry2Data = wholeCountry2Data
  },
}

export const actions = {
  setWholeCountry2Data({ commit }, wholeCountry2Data) {
    commit('setWholeCountry2Data', wholeCountry2Data)
  },
}

export const getters = {
  wholeCountry2Data: (state) => {
    return state.wholeCountry2Data
  },
}