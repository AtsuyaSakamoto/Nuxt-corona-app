<template>
  <div class="text-center">
    <h2 class="sm:text-2xl mb-2 text-white">感染者数推移</h2>
    <div class="inline-block bg-teal-400">
      <input
        id="graphChoice1"
        type="radio"
        name="selectGraph"
        value="1"
        checked
        class="form-radio"
        @change="changeGraphTerm"
      />
      <label for="graphChoice1" class="inline-flex items-center text-white"
        >累計</label
      >
      <input
        id="graphChoice2"
        type="radio"
        name="selectGraph"
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
      datacollection: {},
      chartLabels: [],
      chartData: [],
      dailyChartLabels: [],
      dailyChartData: [],
      graphSwich: true,
      graphOption: {},
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
            label: '累計感染者数',
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
      this.$store.state.fetchTotalData.TotalData.forEach((data)=> {
        this.chartLabels.push(data.date)
      })


    },
    getChartData() {
      this.chartData = []
      this.$store.state.fetchTotalData.TotalData.forEach((data)=> {
        this.chartData.push(data.npatients)
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
            label: '日別感染者数',
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
      this.$store.state.fetchDailyData.DailyData.data.forEach((data)=> {
        this.dailyChartLabels.push(data.date)
      })
    },
    getTodayChartData() {
      this.dailyChartData = []
      this.$store.state.fetchDailyData.DailyData.data.forEach((data)=> {
        this.dailyChartData.push(data.dailycorona)
      })       },
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
