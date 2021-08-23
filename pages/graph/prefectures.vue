<template>
  <div class="mx-20">
    <Chart :chart-data="chartdata" :options="options" />
    <select
      v-model="selected_pref_code"
      name="pref_code"
      @change="chengeGraph(selected_pref_code)"
    >
      <option value="1">北海道</option>
      <option value="2">青森県</option>
      <option value="3">岩手県</option>
      <option value="4">宮城県</option>
      <option value="5">秋田県</option>
      <option value="6">山形県</option>
      <option value="7">福島県</option>
      <option value="8">茨城県</option>
      <option value="9">栃木県</option>
      <option value="10">群馬県</option>
      <option value="11">埼玉県</option>
      <option value="12">千葉県</option>
      <option value="13">東京都</option>
      <option value="14">神奈川県</option>
      <option value="15">新潟県</option>
      <option value="16">富山県</option>
      <option value="17">石川県</option>
      <option value="18">福井県</option>
      <option value="19">山梨県</option>
      <option value="20">長野県</option>
      <option value="21">岐阜県</option>
      <option value="22">静岡県</option>
      <option value="23">愛知県</option>
      <option value="24">三重県</option>
      <option value="25">滋賀県</option>
      <option value="26">京都府</option>
      <option value="27">大阪府</option>
      <option value="28">兵庫県</option>
      <option value="29">奈良県</option>
      <option value="30">和歌山県</option>
      <option value="31">鳥取県</option>
      <option value="32">島根県</option>
      <option value="33">岡山県</option>
      <option value="34">広島県</option>
      <option value="35">山口県</option>
      <option value="36">徳島県</option>
      <option value="37">香川県</option>
      <option value="38">愛媛県</option>
      <option value="39">高知県</option>
      <option value="40">福岡県</option>
      <option value="41">佐賀県</option>
      <option value="42">長崎県</option>
      <option value="43">熊本県</option>
      <option value="44">大分県</option>
      <option value="45">宮崎県</option>
      <option value="46">鹿児島県</option>
      <option value="47">沖縄県</option>
    </select>
    <input
      id="graphChoice1"
      type="radio"
      name="selectGraph"
      value="1"
      checked
      @change="chengeGraphTerm"
    />
    <label for="graphChoice1">累計</label>
    <input
      id="graphChoice2"
      type="radio"
      name="selectGraph"
      value="2"
      @change="chengeGraphTerm"
    />
    <label for="graphChoice2">日別</label>

    <PrefecturesDead />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Papa from 'papaparse'
import Chart from '../../components/Chart.vue'
import PrefecturesDead from '../../components/PrefecturesDead'

export default {
  components: { Chart, PrefecturesDead },

  data() {
    return {
      selected_pref_code: 1,
      chartdata: {
        labels: [],

        datasets: [
          {
            label: ['累計感染者数'],
            backgroundColor: '#f87979',
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
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
    // eslint-disable-next-line no-console
    console.log(parsedata.data)
  },
  computed: {
    ...mapGetters(['prefectures/prefecturesData']),
  },

  created() {
    this.$store.state.prefecturesData.forEach((data) => {
      if (data.pref_code === this.selected_pref_code) {
        this.chartdata.labels.push(data.date)
        this.chartdata.datasets[0].data.push(data.total_infection)
      }
    })
  },
  methods: {
    chengeGraph(selectedPrefCode) {
      this.chartdata.labels = []
      this.chartdata.datasets[0].data = []
      const newChartDataLabels = []
      const newChartDataDatasets = []

      this.$store.state.prefecturesData.forEach((data) => {
        if (data.pref_code === Number(selectedPrefCode)) {
          newChartDataLabels.push(data.date)
          newChartDataDatasets.push(data.total_infection)
          this.chartdata.labels = newChartDataLabels
          this.chartdata.datasets[0].data = newChartDataDatasets
        }
      })

      // eslint-disable-next-line no-console
      console.log(this.chartdata.datasets[0].data)
    },
    chengeGraphTerm(e) {
      // eslint-disable-next-line no-console
      console.log(e.target.value)
      e.target.value === '2'
        ? // eslint-disable-next-line no-console
          console.log('日別グラフを表示')
        : // eslint-disable-next-line no-console
          console.log('累計グラフを表示')
    },
  },
}
</script>
