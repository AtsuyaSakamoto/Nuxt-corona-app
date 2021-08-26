<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  mixins: [reactiveProp],
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
    // console.log(this.chart)
    // console.log(this.options)
    this.renderChart(this.chart, this.options)
  },
}
</script>