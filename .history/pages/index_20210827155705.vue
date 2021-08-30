<template>
<div>
  <h1>index</h1>
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
        store.dispatch("fetchTotalData", res.data)
      })
      await axios
      .get("https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json")
        // 累積死亡者
      .then(res => {
        const payload = {
          totalDeath: res.data.slice(-1),
          comparison_yesterday: (res.data.slice(-1)) - (res.data.slice(-2)),
          comparison_oneWeek: (res.data.slice(-1) - res.data.slice(-7)
        }
        store.dispatch("fetchTotalDeath",payload)
      })
  },
  // computed:{
  //   data(){
  //     return this.store.getters.totalDead
  //   }
  // }
}

// function getData () {
//   return Promise.all([
//     // 対策病床使用率
//     axios.get(process.env.API_URL + 'https://www.stopcovid19.jp/data/covid19japan_beds/latest.json'),
//     // 累計感染者数
//     axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'),
//     // // 累計死亡者数
//     axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json'),
//     // // PCR検査陽性
//     axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'),

//   ]).then(([usebed,corona,dead,pcr]) => {

//     const data = {}
//     data.usebed = usebed.data
//     data.corona = corona.data
//     data.dead = dead.data
//     data.pcr = pcr.data
//     return Promise.resolve(data)
//   })
// }



  // async asyncData () {
  //   const data = await getData()
  //   // eslint-disable-next-line no-unused-expressions
  //   return {
  //   usebed : data.usebed,
  //   corona : data.corona,
  //   dead : data.dead,
  //   pcr : data.pcr
  //   }

  // },
</script>