<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  // props: {
  //   chartdata: {
  //     type: Object,
  //     default: null,
  //   },
  //   options: {
  //     type: Object,
  //     default: null,
  //     // default: () => ({
  //     //   responsive: true,
  //     //   maintainAspectRatio: false,
  //     // }),
  //   },
  // },
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  // computed: {
  //   chartData(){
  //     this.mounted()
  //   }
  // },
  watch: {
    chartData() {
      // eslint-disable-next-line no-console
      console.log('監視')
      this.$data._chart.update()
      this.mounted()
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
