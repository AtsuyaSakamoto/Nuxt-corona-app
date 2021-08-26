<script>
import { Pie } from 'vue-chartjs'
// const { reactiveProp } = mixins
export default {
    extends: Pie,
    // mixins: [reactiveProp],
  data(){
    return {
        data: {
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
      console.log("mount")
    this.renderChart(this.data, this.options)
  },
}
</script> -->