<template>
  <div class="m-10">
    <div>都道府県別病床使用率(データ更新日：{{ graphData[0].update }})</div>

    <ul class="md:flex flex flex-wrap m-8">
      <li v-for="graph in graphData" :key="graph.pref_code">
        <div
          :class="
            parseFloat(graph.use_bed_rate) > 50
              ? 'bg-red-500 shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent '
              : parseFloat(graph.use_bed_rate) > 25
              ? 'bg-red-300 shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent'
              : parseFloat(graph.use_bed_rate) > 5
              ? 'bg-red-100 shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent'
              : 'bg-white shadow p-3 rounded lg:w-64 text-center m-3 hover:bg-gray-300  hover:shadow-lg hover:border-transparent'
          "
          @click="openModal(graph)"
        >
          <div class="mt-6">
            <p class="text-lg text-bold tracking-wide text-black mb-2">
              {{ graph.prefecture }}
            </p>
            <p class="text-md text-black font-hairline">
              {{ graph.use_bed_rate }}
            </p>

            <p class="text-md text-black font-hairline">
              {{ graph.inpatient }}人/ {{ graph.secure_bed }}床
            </p>
            <!-- <button @click="openModal(graph)">詳細</button> -->
          </div>
          <div class="mt-6"></div>
        </div>
      </li>
    </ul>
    <Modal v-if="showModal" :val="postItem" @close="closeModal"></Modal>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Modal,
  },
  asyncData() {
    return axios
      .get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
      .then((response) => {
        return {
          graphData: response.data,
        }
      })
  },
  data() {
    return {
      graphData: [],
      showModal: false,
      postItem: '',
    }
  },

  created() {
    const tranceData = []
    for (let i = 0; i < this.graphData.length; i++) {
      tranceData.push({
        pcr_positive: this.graphData[i]['PCR検査陽性者数'],

        injured: this.graphData[i]['うち重症者数'],

        secure_bed: this.graphData[i]['入院患者受入確保病床'],

        use_bed_rate: this.graphData[i]['入院患者病床使用率'],

        inpatient: this.graphData[i]['入院者数'],

        source: this.graphData[i]['出典'],

        update: this.graphData[i]['更新日'],

        home_recuperator: this.graphData[i]['自宅療養者数'],

        prefecture: this.graphData[i]['都道府県名'],

        pref_code: this.graphData[i]['都道府県番号'],

        injured_bed: this.graphData[i]['重症患者受入確保病床数'],

        use_injured_bed_rate: this.graphData[i]['重症患者病床使用率'],
      })
    }
    this.graphData = tranceData
    // eslint-disable-next-line no-console
    console.log(this.graphData)
  },
  methods: {
    openModal(graph) {
      this.postItem = graph
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>
