<template>
  <div class="small">
    <div class="text-center">
      <h2 class="text-2xl mb-2">都道府県別感染者数</h2>
      <div class="m-auto inline-block bg-teal-400">
        <PrefecturesSelect class="mb-2" @my-click="changeGraph" />

        <input
          id="graphChoice1"
          type="radio"
          name="selectGraph"
          value="1"
          checked
          class="form-radio"
          @change="changeGraphTerm"
        />
        <label for="graphChoice1" class="inline-flex items-center">累計</label>
        <input
          id="graphChoice2"
          type="radio"
          name="selectGraph"
          value="2"
          class="form-radio"
          @change="changeGraphTerm"
        />
        <label for="graphChoice2" class="inline-flex items-center">日別</label>
      </div>

      <Chart :chart-data="datacollection" :options="graphOption"></Chart>
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
            label: '累計感染者数',
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
          this.chartData.push(data.total_infection)
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
          this.dailyChartData.push(data.daily_infection)
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

<style>
/* .small { */
/* max-width: 600px; */
/* margin: 100px auto; */
/* } */
</style>
