<template>
<div>
  <h1>index{{infectionData}}</h1>
  <p>{{deathData}}</p>
  <p>{{pcrData}}</p>
</div>
</template>

<script>
import axios from 'axios'
export default{
    async fetch({ store }) {
      await axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
        // 累積感染者数
      )
      .then((res) => {
        const necessaryData = res.data.slice(-7)
        const payload = {
          totalInfection: necessaryData[6].npatients,
          comparison_yesterday: (necessaryData[6].npatients) - (necessaryData[5].npatients),
          comparison_oneWeek: (necessaryData[6].npatients) - (necessaryData[0].npatients)
        }
        store.dispatch("fetchTotalData", payload)
      })

      await axios
      .get("https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json")
        // 累積死亡者
      .then(res => {
        const necessaryData = res.data.slice(-7)
        const payload = {
          totalDeath: necessaryData[6].ndeaths,
          comparison_yesterday: (necessaryData[6].ndeaths) - (necessaryData[5].ndeaths),
          comparison_oneWeek: (necessaryData[6].ndeaths) - (necessaryData[0].ndeaths)
        }
        store.dispatch("fetchTotalDeath",payload)
      })

      // PCR検査データの取得
      await axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
      )
      .then((res) => {
        store.dispatch('pcr/fetchPcrData', res.data)
      })
  // PCR検査データの取得
    await axios.get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
    .then(res => {
    store.dispatch("bedusage/fetchBedsUsageData", res.data)
    })
  },
  computed:{
    infectionData(){
      return this.$store.state.total
    },
    deathData(){
      return this.$store.state.totalDeath
    },
    pcrData(){
      return this.$store.state.pcr.pcrData
    }
  }
}
</script>