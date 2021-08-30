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
      const parseData = Papa.parse(res.data,{
        // csvヘッダーをプロパティに変更
      header: true,
      // 文字列を数値に変換
      dynamicTyping: true,
      // 文字化け防止
      encoding: 'Shift-JIS',
      // エラーを取り除く
      skipEmptyLines: true,
      TransformHeader(header){
        if(header === "PCR 検査陽性者数"){
          return ""
        }
      }
      })
      })
  },
  computed: {
    pcrDataArray() {
      return this.$store.state.pcr.pcrData
    },
  },
}
</script>
