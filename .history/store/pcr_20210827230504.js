export const state = () => ({
  pcrData : {},
  parseData:{}
})

export const mutations = {
  setData(state,pcrData){
    state.pcrData = pcrData
  }
}
export const actions = {
  fetchPcrData({commit}, payload){
    commit("setData", payload)
  },
  setParseData({commit}, payload){
    const parseData = []
    for(let i = 0; i < payload.length;i++){
      parseData.push({
        pcr_positive_num: Number(payload[i]["PCR 検査陽性者数"]),
        pcr_test_num: Number(payload[i]["PCR 検査実施件数"])
      })
    }
    console.log(pa)
  }
}