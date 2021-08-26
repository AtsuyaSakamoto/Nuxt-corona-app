 <script>
import { Pie , mixins} from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
    extends: Pie,
    mixins: [reactiveProp],
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
//   props: {
//     chart: {
//       type: Object,
//     },
//     options: {
//       type: Object,
//       default: () => ({
//         responsive: true,
//         maintainAspectRatio: false,
//       }),
//     },
//   },
  mounted(){
    console.log(this.chart)
    console.log(this.options)
    this.renderChart(this.chart, this.options)
  },
}
</script>