<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: {
    modalData: {
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
    console.log(this.modal¥Data)
    this.renderChart(this.chartData, this.options)
  },
}
</script>