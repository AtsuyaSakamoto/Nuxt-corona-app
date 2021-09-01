<template>
  <div class="bg-gray-900">
    <Content :data-arry="bedUsage" />
  </div>
</template>

<script>
<<<<<<< HEAD
import axios from "axios"
import Content from '../../components/bedUsage/Content'
=======
import axios from 'axios'
import Content from '../../components/bedUsage/content'
>>>>>>> 3de696a88b9e6bbabd323dfa624728c4a27251ce

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
