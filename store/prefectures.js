export const state = () => ({
  prefecturesData: [],
})

export const mutations = {
  setPrefecturesData(state, prefecturesData) {
    state.prefecturesData = prefecturesData
    // eslint-disable-next-line no-console
    console.log('axios1回目')
  },
}

export const actions = {
  setPrefecturesData({ commit }, prefecturesData) {
    commit('setPrefecturesData', prefecturesData)
  },
}

export const getters = {
  prefecturesData: (state) => {
    return state.prefecturesData
  },
}
