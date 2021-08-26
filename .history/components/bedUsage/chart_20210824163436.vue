<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: {
    chart: {
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
    console.log(this.options)
    this.renderChart(this.chartData, this.options)
  },
}
</script>