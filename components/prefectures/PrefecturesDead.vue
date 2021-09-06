<template>
  <div class="text-center">
    <h1 class="sm:text-2xl my-5 text-white lg:mt-8 lg:text-3xl">
      都道府県別死者数
    </h1>
    <div class="inline-block bg-teal-400">
      <PrefecturesSelect class="mb-2" @select-prefecture="changeGraph" />

      <input
        id="graphChoice3"
        type="radio"
        name="selectGraph2"
        value="1"
        checked
        class="form-radio"
        @change="changeGraphTerm"
      />
      <label for="graphChoice3" class="inline-flex items-center text-white"
        >累計</label
      >
      <input
        id="graphChoice4"
        type="radio"
        name="selectGraph2"
        value="2"
        class="form-radio"
        @change="changeGraphTerm"
      />
      <label
        for="graphChoice4"
        class="inline-flex items-center text-white my-2 lg:my-5"
        >日別</label
      >
    </div>

    <Chart
      :chart-data="datacollection"
      :options="graphOption"
      :styles="myStyles"
    ></Chart>

    <div class="sm:mt-20 mb-10">
      <a
        href="https://www3.nhk.or.jp/news/special/coronavirus/data-widget/"
        target="_blank"
        class="text-sm sm:text-lg underline text-white hover:text-gray-100"
      >
        都道府県ごとの死者者数の推移情報提供:NHK
      </a>
    </div>
  </div>
</template>

<script>
import Chart from '../../components/prefectures/Chart.js'
import PrefecturesSelect from './PrefecturesSelect'

export default {
  components: {
    Chart,
    PrefecturesSelect,
  },
  data() {
    return {
      selected_pref_code: 1,
      datacollection: Object,
      chartLabels: [],
      chartData: [],
      dailyChartLabels: [],
      dailyChartData: [],
      graphSwich: true,
      graphOption: Object,
      myStyles: { posision: 'relative' },
    }
  },

  created() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.getLabels()
      this.getChartData()

      this.datacollection = {
        labels: this.chartLabels,

        datasets: [
          {
            label: '累計死者数',
            backgroundColor: 'rgba(255,0,0,0.5)',
            borderWidth: '0.1',
            borderColor: 'red',
            hoverBackgroundColor: 'rgba(255,0,0,0.5)',
            data: this.chartData,
            lineTension: 0,
            fill: true,
            boxWidth: 10,
          },
        ],
      }
      this.graphOption = {
        scales: {
          yAxes: [
            {
              gridLines: {
                color: 'white',
                zeroLineColor: 'white',
              },
              scaleLabel: {
                display: true,
                labelString: '(人)',
                fontSize: 15,
                fontColor: 'white',
              },
              ticks: {
                // 目盛り
                fontColor: 'white', // 目盛りの色
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
                zeroLineColor: 'white',
              },
              scaleLabel: {
                display: true,
                fontSize: 15,
              },
              ticks: {
                // 目盛り
                fontColor: 'white', // 目盛りの色
              },
            },
          ],
        },

        responsive: true,
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0,
            fill: false,
          },
        },
      }
    },

    getLabels() {
      this.chartLabels = []
      this.$store.state.prefectures.prefecturesData.forEach((data) => {
        if (data.pref_code === Number(this.selected_pref_code)) {
          this.chartLabels.push(data.date)
        }
      })
    },
    getChartData() {
      this.chartData = []
      this.$store.state.prefectures.prefecturesData.forEach((data) => {
        if (data.pref_code === Number(this.selected_pref_code)) {
          this.chartData.push(data.total_dead)
        }
      })
    },
    changeGraph(selectedPrefCode) {
      this.selected_pref_code = selectedPrefCode
      if (this.graphSwich) {
        this.fillData()
      } else {
        this.dailyGraph()
      }
    },
    dailyGraph() {
      this.getTodayLabels()
      this.getTodayChartData()

      this.datacollection = {
        labels: this.dailyChartLabels,

        datasets: [
          {
            label: '日別死者数',
            backgroundColor: 'rgba(255,0,0,0.5)',
            borderWidth: '0.1',
            borderColor: 'red',
            hoverBackgroundColor: 'rgba(255,0,0,0.5)',
            data: this.dailyChartData,
            lineTension: 0.5,
            pointRadius: 0,
            fill: true,
            boxWidth: 10,
          },
        ],
      }
      this.graphOption = {
        scales: {
          yAxes: [
            {
              gridLines: {
                color: 'white',
              },
              scaleLabel: {
                display: true,
                labelString: '(人)',
                fontSize: 15,
                fontColor: 'white',
              },
              ticks: {
                // 目盛り
                fontColor: 'white', // 目盛りの色
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: true,
                fontSize: 15,
              },
              ticks: {
                // 目盛り
                fontColor: 'white', // 目盛りの色
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0,
            fill: false,
          },
        },
      }
    },
    getTodayLabels() {
      this.dailyChartLabels = []
      this.$store.state.prefectures.prefecturesData.forEach((data) => {
        if (data.pref_code === Number(this.selected_pref_code)) {
          this.dailyChartLabels.push(data.date)
        }
      })
    },
    getTodayChartData() {
      this.dailyChartData = []
      this.$store.state.prefectures.prefecturesData.forEach((data) => {
        if (data.pref_code === Number(this.selected_pref_code)) {
          this.dailyChartData.push(data.daily_dead)
        }
      })
    },
    changeGraphTerm(e) {
      e.target.value === '2' ? this.dailyGraph() : this.fillData()
      this.graphSwich = !this.graphSwich
    },
  },
}
</script>
