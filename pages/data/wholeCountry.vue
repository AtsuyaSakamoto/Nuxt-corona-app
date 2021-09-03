<template>
  <div class="pt-10 px-30 bg-gray-900">
    <div class="grid grid-cols-1 gap-6 ml-3 mr-8 sm:mx-20 md:mx-36 lg:grid-cols-2">
      <div>
        <WholeDead />
      </div>
      <div>
        <WholeCorona />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import WholeDead from "../../components/wholeCountry/WholeDead.vue"
import WholeCorona from "../../components/wholeCountry/WholeCorona.vue"
export default {
  components: {
    WholeDead,
    WholeCorona,
  },

async fetch( {store,error} ) {
  try{
    await axios.get("https://data.corona.go.jp/converted-json/covid19japan-npatients.json").then((res) => {
      store.dispatch("wholeCountry/setFetchTotalData", res.data)
    })
    await axios
    .get("https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json")
      // 累積死亡者 + 日別感染者数
    .then((res) => {
      store.dispatch("wholeCountry/setFetchTotalDead",res.data)
    })
  }catch(err){
    error({
      statusCode: err.response.status,
    });
    }
  },
  head() {
    return {
      title: "らくらくコロナ",
      meta: [
        // ページの説明
        {
          hid: 'description',
          name: 'description',
          content: '全国のコロナウイルス感染状況を掲載しています。',
        },
        // ページのキーワード
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'コロナ感染者,コロナ死亡者,全国コロナ',
        },

        // ページの種類 TOPページであれば「website」、TOP以外のページでは「article」
        { hid: 'og:type', property: 'og:type', content: 'article' },
        // ページ名
        { hid: 'og:title', property: 'og:title', content: "らくらくコロナ" },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '全国のコロナウイルス感染状況を掲載しています。',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://rakucoro-sakaaaa.vercel.app/data/wholecountry',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://image.freepik.com/free-vector/covid-19-red-logo-template_23-2148501246.jpg',
        },
      ],
    }
  },
}
</script>

