<template>
  <Content :pcr-data-array="pcrDataArray" />
</template>
<script>
import axios from 'axios'
import Papa from 'papaparse'
import Content from '../../components/pcrCorona/content.vue'
export default {
  components: {
    Content,
  },
  async fetch({ store }) {
    await axios
      .get(
        'https://www.stopcovid19.jp/data/mhlw_go_jp/opendata/covid19.csv'
      )
      .then((res) => {
        // store.dispatch('pcr/fetchPcrData', res.data)
        
      })
  },
  computed: {
    pcrDataArray() {
      return this.$store.state.pcr.pcrData
    },
  },
}
</script>
