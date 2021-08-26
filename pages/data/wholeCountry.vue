<template>
  <div> {{data}} </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
// import Papa from 'papaparse'
// import wholeDead from '../../components/wholeCountry/WholeDead.vue'
// import WholeCorona from '../../components/wholeCountry/WholeCorona.vue'


function getData () {
  return Promise.all([
    // // 日別感染者
    // axios.get(process.env.API_URL + 'https://www.google.com/url?q=https://www.mhlw.go.jp/content/pcr_positive_daily.csv&sa=D&source=editors&ust=1629958775531000&usg=AOvVaw1IKQ_cxJeVkIA5Nfl8BIlg'),
    // 累計感染者数
    axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'),
    // // 日別死者数
    // axios.get(process.env.API_URL + 'https://www.google.com/url?q=https://www.mhlw.go.jp/content/death_total.csv&sa=D&source=editors&ust=1629958650569000&usg=AOvVaw3bcVGxRcQZa9U1dU9fqaS1'),
    // 累計死亡者数
    axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json'),

  ]).then(([totalcorona,totaldead]) => {



    const data = {}
    // data.daycorona = daycorona.data
    data.totalcorona = totalcorona.data
    // data.daydead = ppdaydead
    data.totaldead = totaldead.data

    return Promise.resolve(data)
  })
}

export default {
  data(){
    return {
      data:[]
    }
  },
  // components: {
  //   wholeDead,
  //   WholeCorona,
  // },

  async fetch (context) {
    const data = await getData()
    // eslint-disable-next-line no-unused-expressions
    // daycorona : data.daycorona,
    context.store.dispatch("wholecountry/setWholeCountryData", data.totalcorona,)
    context.store.dispatch("wholecountry2/setWholeCountry2Data", data.totaldead,)
    

    // totalcorona : data.totalcorona,
    // // daydead : data.daydead,
    // totaldead : data.totaldead,

  },
  conputed:{
    ...mapGetters(['wholeCountryData']),
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.$store.state.wholecountry.wholeCountryData)
    this.data = this.$store.state.wholecountry.wholeCountryData
  },

}
</script>
