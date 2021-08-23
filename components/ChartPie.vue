<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: {
    chartdata: {
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
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
