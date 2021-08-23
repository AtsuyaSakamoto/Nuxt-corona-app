<template>
  <div class="m-10">
    <div class="mx-20">
      <Chart :chartdata="chartdata" :options="options" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from '../../components/Chart.vue'

export default {
  components: { Chart },

  asyncData() {
    return axios
      .get(
        'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'
      )
      .then((response) => {
        return {
          graphData: response.data,
        }
      })
  },

  data() {
    return {
      storeData: this.$store.state.counter,
      graphData: null,
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
  created() {
    this.graphData.map((data) => [
      this.chartdata.labels.push(data.date),
      this.chartdata.datasets[0].data.push(data.npatients),
    ])
  },
  methods: {},
}
</script>
