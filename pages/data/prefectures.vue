<template>
  <div class="pt-10 px-30 bg-gray-900">
    <div
      class="grid grid-cols-1 gap-6 ml-3 mr-8 sm:mx-20 md:mx-36 lg:grid-cols-2"
    >
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
  data() {
    return {
      title: 'コロナ感染状況 都道府県別グラフ',
    }
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
  head() {
    return {
      title: this.title,
      meta: [
        // ページの説明
        {
          hid: 'description',
          name: 'description',
          content: 'コロナウイルスの都道府県状況',
        },
        // ページのキーワード
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'コロナ感染者,コロナ死亡者,コロナ都道府県',
        },

        // ページの種類 TOPページであれば「website」、TOP以外のページでは「article」
        { hid: 'og:type', property: 'og:type', content: 'article' },
        // ページ名
        { hid: 'og:title', property: 'og:title', content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ページの説明',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://localhost:3000/data/prefectures',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://hogehoge.com/img/ogp/about.jpg',
        },
      ],
    }
  },
}
</script>
