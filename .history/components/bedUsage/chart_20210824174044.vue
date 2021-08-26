 <script>
import { Pie , mixins} from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Pie,
  data(){
    return {
        chartdata: {
            labels: ['January', 'February'],
            datasets: [
                {
                label: ['Data One'],
                backgroundColor: '#f87979',
                data: [40, 30]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
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
  props:["chart", "options"],
  mounted(){
    console.log(this.chart)
    console.log(this.options)
    this.renderChart(this.chart, this.options)
  },
}
</script>