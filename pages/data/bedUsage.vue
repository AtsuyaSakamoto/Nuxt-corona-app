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
  head() {
    return {
      title: 'らくらくコロナ',
      meta: [
        // ページの説明
        {
          hid: 'description',
          name: 'description',
          content: '新型コロナウイルスの日本国内病床使用率',
        },
        // ページのキーワード
        {
          hid: 'keyword',
          name: 'keyword',
          content:
            '新型コロナウイルス,日本,病床使用率,都道府県,重症者数,入院患者数',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: 'らくらくコロナ' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '都道府県ごとの病床使用率状況を掲載しています。。',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://rakucoro-sakaaaa.vercel.app/data/bedusage',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://image.freepik.com/free-vector/covid-19-red-logo-template_23-2148501246.jpg',
        },
      ],
    }
  },
  computed: {
    bedUsage() {
      return this.$store.state.bedusage.bedUsageData
    },
  },
}
</script>
