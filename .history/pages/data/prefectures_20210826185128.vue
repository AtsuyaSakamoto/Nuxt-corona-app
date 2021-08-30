<template>
  <div class="pt-10 px-30 bg-gray-900">
    <div class="grid grid-cols-1 gap-6 mr-5 sm:mx-20 md:mx-36 lg:grid-cols-2">
      <div>
        <PrefecturesInfection />
      </div>
      <div>
        <PrefecturesDead />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Papa from 'papaparse'
import PrefecturesInfection from '../../components/prefectures/PrefecturesInfection'
import PrefecturesDead from '../../components/prefectures/PrefecturesDead'

export default {
  components: {
    PrefecturesDead,
    PrefecturesInfection,
  },

  async fetch(context) {
    const result = await axios.get(
      'https://www3.nhk.or.jp/n-data/opendata/coronavirus/nhk_news_covid19_prefectures_daily_data.csv'
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
      transformHeader(header) {
        if (header === '各地の感染者数_1日ごとの発表数') {
          return 'daily_infection'
        } else if (header === '各地の感染者数_累計') {
          return 'total_infection'
        } else if (header === '各地の死者数_1日ごとの発表数') {
          return 'daily_dead'
        } else if (header === '各地の死者数_累計') {
          return 'total_dead'
        } else if (header === '日付') {
          return 'date'
        } else if (header === '都道府県コード') {
          return 'pref_code'
        } else if (header === '都道府県名') {
          return 'pref_name'
        } else {
          return 'default'
        }
      },
    })

    context.store.dispatch('prefectures/setPrefecturesData', parsedata.data)
  },
}
</script>
