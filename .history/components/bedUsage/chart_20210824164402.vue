<script>
import { Pie , mixins} from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Pie,
  mixins: [reactiveProp],
  // props: {
  //   chart: {
  //     type: Object,
  //   },
  //   options: {
  //     type: Object,
  //     default: () => ({
  //       responsive: true,
  //       maintainAspectRatio: false,
  //     }),
  //   },
  // },
  props:[""options"],
  mounted(){
    // console.log(this.chart)
    // console.log(this.options)
    this.renderChart(this.chart, this.options)
  },
}
</script>