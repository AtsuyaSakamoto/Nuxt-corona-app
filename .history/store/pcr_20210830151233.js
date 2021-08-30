import axios from 'axios'

export const state = () => ({
  pcrData : {},
  parseData:[]
})

export const mutations = {
  setData(state,pcrData){
    state.pcrData = pcrData
  },
  setParseData(state, parseData){
    state.parseData = parseData
  }
}
export const actions = {
  fetchPcrData({commit}){
    console.log("default")
    axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
      )
      .then((res) => {
        console.log(res.data)
      })
    // commit("setData", payload)
  },
  setParseData({commit}, payload){
    const parseData = []
    for(let i = 0; i < payload.length;i++){
      if(payload[i]["PCR 検査実施件数"] === null){
        payload[i]["PCR 検査実施件数"] = 0
      }
      parseData.push({
        pcr_positive_num:payload[i]["PCR 検査陽性者数"],
        pcr_test_num:payload[i]["PCR 検査実施件数"],
        date: payload[i]["日付"]
      })
    }
    commit("setParseData", parseData)
  }
}