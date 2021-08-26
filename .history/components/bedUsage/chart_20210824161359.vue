<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: {
    chartData: {
      type: Object,
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
      }),
    },
  },
  mounted(){
    console.log(this.chartData)
    this.renderChart(this.chartData, this.options)
  },
}
</script>