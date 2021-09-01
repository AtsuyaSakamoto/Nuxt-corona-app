<template>
  <div class="pt-10 px-30 bg-gray-900">
    <div class="grid grid-cols-1 gap-6 mr-5 sm:mx-20 md:mx-36 lg:grid-cols-2">
      <div>
        <WholeDead />
      </div>
      <div>
        <WholeCorona />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import WholeDead from '../../components/wholeCountry/WholeDead.vue'
import WholeCorona from '../../components/wholeCountry/WholeCorona.vue'

export default {
  components: {
    WholeDead,
    WholeCorona,
  },

async fetch( {store} ) {
      await axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
        // 累積感染者数 + 日別感染者数
      )
      .then((res) => {
        store.dispatch("wholeCountry/setFetchTotalData", res.data)
      })
      await axios
      .get("https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json")
        // 累積死亡者 + 日別感染者数
      .then((res) => {
        store.dispatch("wholeCountry/setFetchTotalDead",res.data)
      })
    }
}
</script>
