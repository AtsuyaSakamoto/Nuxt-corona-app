<template>
  <div class="text-center">
    <h2 class="sm:text-2xl mb-2 text-white">死亡者数推移</h2>
    <div class="inline-block bg-teal-400">

      <input
        id="graphChoice3"
        type="radio"
        name="selectGraph2"
        value="1"
        checked
        class="form-radio"
        @change="changeGraphTerm"
      />
      <label for="graphChoice1" class="inline-flex items-center text-white"
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
      <label for="graphChoice2" class="inline-flex items-center text-white"
        >日別</label
      >
    </div>

    <WholeChart
      :chart-data="datacollection"
      :options="graphOption"
      :styles="myStyles"
    ></WholeChart>
    <a
      href="https://corona.go.jp/dashboard/"
      target="_blank"
      class="underline text-white hover:text-gray-100"
    >
      新型コロナウイルス感染症対策
    </a>
  </div>
</template>

<script>
import WholeChart from '../../components/wholeCountry/wholeChart'

export default {
  components: {
    WholeChart,
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
        scaleFontColor: 'white',
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
                fontColor: 'white',
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
      this.$store.state.wholeCountry.TotalDead.forEach((data)=> {
        this.chartLabels.push(data.date)
      })

    },
    getChartData() {
      this.chartData = []
      this.$store.state.wholeCountry.TotalDead.forEach((data)=> {
        this.chartData.push(data.ndeaths)
      }) 

    },
    // 日別グラフへの切り替え
    dailyGraph() {
      this.getTodayLabels()
      this.getTodayChartData()

      this.datacollection = {
        labels: this.dailyChartLabels,

        datasets: [
          {
            label: '日別死亡者数',
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
      this.$store.state.wholeCountry.TotalDead.forEach((data)=> {
        this.dailyChartLabels.push(data.date)
      })
      this.dailyChartLabels.shift()
    },
    getTodayChartData() {
      this.dailyChartData = this.$store.getters["wholeCountry/fetchDailyDead"]
      },
    // 累計グラフと日別グラフの処理を管理
    changeGraphTerm(e) {
      e.target.value === '2' ? this.dailyGraph() : this.fillData()
      this.graphSwich = !this.graphSwich
      if (this.graphSwich) {
        this.fillData()
      } else {
        this.dailyGraph()
      }
    },
  },
}
</script>
