<template>
  <Content:pcr-parse-data="pcrParseData"/>
</template>

<script>
import axios from 'axios'
import Papa from 'papaparse'
import Content from '../../components/pcrCorona/content.vue'
export default {
  components: {
    Content,
  },
  async fetch({store}){
    await axios
    .get('https://www.stopcovid19.jp/data/mhlw_go_jp/opendata/covid19.csv')
    .then((res) => {
      const parseData = Papa.parse(res.data,{
      header: true,
      TransformHeader(header){
        if(header === "PCR 検査陽性者数"){
          return "pcr_positive_num"
        }else if(header === "PCR 検査実施件数"){
          return "pcr_test_num"
        }else if(header === "日付"){
          return "date"
        }
      }
    })
      store.dispatch("pcr/setParseData", parseData.data)
    })
  },
  computed: {
    pcrParseData(){
      return this.$store.state.pcr.parseData
    }
  },
}
</script>