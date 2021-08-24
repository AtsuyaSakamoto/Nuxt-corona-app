export const state = () => ({
  data: [],
})

export const mutations = {
  testMutations(state, prefecturesData) {
    state.data = prefecturesData
    // eslint-disable-next-line no-console
    console.log('axios二回目')
  },
}
