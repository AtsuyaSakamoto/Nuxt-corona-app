<template>
  <div class="text-center">
    <h2 class="text-2xl mb-2">都道府県別死者数</h2>
    <div class="m-auto inline-block bg-teal-400">
      <PrefecturesSelect class="mb-2" @my-click="changeGraph" />

      <input
        id="graphChoice3"
        type="radio"
        name="selectGraph2"
        value="1"
        checked
        class="form-radio"
        @change="changeGraphTerm"
      />
      <label for="graphChoice3">累計</label>
      <input
        id="graphChoice4"
        type="radio"
        name="selectGraph2"
        value="2"
        class="form-radio"
        @change="changeGraphTerm"
      />
      <label for="graphChoice4" class="inline-flex items-center">日別</label>
    </div>

    <Chart
      :chart-data="datacollection"
      :options="graphOption"
      :styles="myStyles"
    ></Chart>
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
      myStyles: { height: '600px', posision: 'relative' },
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
              scaleLabel: {
                display: true,
                labelString: '(人)',
                fontSize: 15,
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
              scaleLabel: {
                display: true,
                labelString: '(人)',
                fontSize: 15,
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
