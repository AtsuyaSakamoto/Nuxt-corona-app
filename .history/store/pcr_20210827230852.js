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
    console.log(payload.data)
    const parseData = []
    for(let i = 0; i < payload.data.length;i++){
      parseData.push({
        pcr_positive_num:payload.data[i]["PCR 検査陽性者数"]),
        pcr_test_num: Number(payload.data[i]["PCR検査 実施件数"])
      })
    }
    console.log(parseData)
  }
}