export const state = () => ({
  bedUsageData : {}
})

export const mutations = {
  setData(state, payload){
    state.bedUsageData = payload
  }
}

export const getters = {
  wholeCountryBedUsage:(state) => {
    let  totalBed = 0
    for(let i = 0; i < state.bedUsageData.length; i++){
      totalBed += state.bedUsageData[i].beds_num_hospitalization
    }
    let totalHospitalization = 0
    for(let i = 0; i < state.bedUsageData.length; i++){
      totalHospitalization += state.bedUsageData[i].num_hospitalization
    }
    const data  = Math.floor(((totalHospitalization / totalBed) * 100)  * 100) / 100
    return data
  }
}


export const actions = {
  fetchBedsUsageData({commit}, payload){
    const bedsData = []
    for(let i=0; i<payload.length;i++){
      bedsData.push({
        id: Number(payload[i]["都道府県番号"]),
        prefecture_name: payload[i]["都道府県名"],
        per_positive: Number(payload[i]["PCR検査陽性者数"]),
        num_hospitalization: Number(payload[i]["入院者数"]),
        phase_hospitalization: payload[i]["入院患者フェーズ"],
        beds_num_hospitalization: Number(payload[i]["入院患者受入即応病床数"]),
        use_bed_rate_hospitalization: Number(payload[i]["入院患者病床使用率"].slice(0,2)),
        num_severe: Number(payload[i]["うち重症者数"]),
        phase_severe:payload[i]["重症者フェーズ"],
        beds_num_severe: Number(payload[i]["重症患者受入即応病床数"]),
        use_bed_rate_severe: payload[i]["重症患者病床使用率"],
        num_mild: Number(payload[i]["宿泊療養者数"]),
        phase_mild: payload[i]["宿泊療養フェーズ"],
        beds_num_mild: Number(payload[i]["宿泊施設受入即応室数"]),
        use_bed_rate_mild: payload[i]["宿泊療養施設居室使用率"],
        num_home: Number(payload[i]["自宅療養者数"]),
        adjust_hospitalization: Number(payload[i]["うち入院先調整中の人数"]),
        updateDate: payload[i]["更新日"],
        source: payload[i]["出典"]
      })
    }
    commit("setData", bedsData)
  }
}