  <template>
  <div class="m-10">
    
  </div>
</template>

<script>
import axios from 'axios'

export default {


  asyncData() {
    return axios
      .get('https://data.corona.go.jp/converted-json/covid19japan-npatients.json')
      .then((response) => {
        return {
          deadData: response.data,
        }
      })
  },

  data() {
    return {
      deadData: [],
    }
  },
  created() {
    const tranceData = []
    for (let i = 0; i < this.deadData.length; i++) {
      tranceData.push({
        date: this.deadData[i].date,
        npatients: this.deadData[i].npatients,
        adpatients: this.deadData[i].adpatients,
      })
    }
    this.deadData = tranceData

  },
}
</script>
