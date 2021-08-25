<template>
  <div>
    <WholeCorona/>
    <WholeDead/>
  </div>

</template>

<script>
import axios from 'axios'
import Papa from 'papaparse'
import WholeCorona from '../../components/wholeCountry/WholeCorona.vue'
import WholeDead from '../../components/wholeCountry/WholeDead.vue'

export default {
    components: {
    WholeCorona,
    WholeDead,
  },

    async fetch(context) {
      const result = await axios.get(
      'https://www.google.com/url?q=https://www.mhlw.go.jp/content/death_total.csv&sa=D&source=editors&ust=1629784557767000&usg=AOvVaw2NaMOgv5Y25s-sNpC9oRt2'
    )
    const parsedata = Papa.parse(result.data, {
      // csvヘッダーをプロパティに変更
      header: true,
      // 文字列を数値に変換
      dynamicTyping: true,
      // 文字化け防止
      encoding: 'Shift-JIS',
      // エラーを取り除く
      skipEmptyLines: true,
    // eslint-disable-next-line no-console
      transformHeader(header) {
        if (header === '日付') {
          return 'whole_date'
        } else if (header === '感染者数') {
          return 'whole_dead'
        }
      },
    })
    // eslint-disable-next-line no-console
    console.log(parsedata.data)
    context.store.dispatch('setWholeCountryData',result)
    }
}

</script>
