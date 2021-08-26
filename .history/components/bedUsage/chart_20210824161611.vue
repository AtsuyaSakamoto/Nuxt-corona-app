<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: {
    data: {
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
  created(){
    console.log(this.data)
    this.renderChart(this.chartData, this.options)
  },
}
</script>