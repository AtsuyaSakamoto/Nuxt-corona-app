<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
      }),
    },
  },
  mounted() {
    // console.log(this.chartData)
    this.renderChart(this.chartData, this.options)
  },
}
</script>