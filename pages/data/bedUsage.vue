<template>
  <div class="bg-gray-900">
    <Content :data-arry="bedUsage" />
  </div>
</template>

<script>
import axios from 'axios'
import Content from '../../components/bedUsage/content'

export default {
  components: {
    Content,
  },
  async fetch({ store, error }) {
    try {
      await axios
        .get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
        .then((res) => {
          store.dispatch('bedusage/fetchBedsUsageData', res.data)
        })
    } catch (err) {
      error({
        statusCode: err.response.status,
      })
    }
  },
  computed: {
    bedUsage() {
      return this.$store.state.bedusage.bedUsageData
    },
  },
}
</script>
