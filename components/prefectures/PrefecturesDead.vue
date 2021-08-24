<template>
  <div class="small">
    <h1>都道府県別死者数</h1>
    <PrefecturesSelect @my-click="changeGraph" />

    <input
      id="graphChoice3"
      type="radio"
      name="selectGraph2"
      value="1"
      checked
      @change="changeGraphTerm"
    />
    <label for="graphChoice3">累計</label>
    <input
      id="graphChoice4"
      type="radio"
      name="selectGraph2"
      value="2"
      @change="changeGraphTerm"
    />
    <label for="graphChoice4">日別</label>
    <Chart :chart-data="datacollection"></Chart>
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
            backgroundColor: 'blue',
            data: this.chartData,
          },
        ],
      }
    },

    getLabels() {
      this.chartLabels = []
      this.$store.state.prefecturesData.forEach((data) => {
        if (data.pref_code === Number(this.selected_pref_code)) {
          this.chartLabels.push(data.date)
        }
      })
    },
    getChartData() {
      this.chartData = []
      this.$store.state.prefecturesData.forEach((data) => {
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
            backgroundColor: 'red',
            data: this.dailyChartData,
          },
        ],
      }
    },
    getTodayLabels() {
      this.dailyChartLabels = []
      this.$store.state.prefecturesData.forEach((data) => {
        if (data.pref_code === Number(this.selected_pref_code)) {
          this.dailyChartLabels.push(data.date)
        }
      })
    },
    getTodayChartData() {
      this.dailyChartData = []
      this.$store.state.prefecturesData.forEach((data) => {
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

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
