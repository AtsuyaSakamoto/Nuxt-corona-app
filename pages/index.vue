<template>
  <body style="">
    <div id="root">
      <!-- <p>{{ new_total_bed }} </p> -->
      <div>
        <div class="MuiContainer-root MuiContainer-maxWidthLg">
          <div
            class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded"
            style="
              padding: 20px;
              margin-top: 90px;
              border-color: rgb(253, 126, 0);
              border-width: 2px;
            "
          >
            <h1 style="text-align: center" class="bg-teal-200">
              新型コロナウイルス 日本国内の状況
            </h1>
            <div class="jss860">
              <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                <div
                  class="
                    MuiGrid-root
                    MuiGrid-item
                    MuiGrid-grid-xs-12
                    MuiGrid-grid-md-6
                  "
                >
                  <div
                    class="
                      MuiPaper-root
                      jss861
                      MuiPaper-elevation1 MuiPaper-rounded
                    "
                  >
                    <h2 style="font-size: 24px">対策病床使用率(参考)※</h2>
                    <h2 style="font-size: 40px">
                       %
                      </h2>
                    <h2 style="background: rgb(255, 128, 128)">ステージ3</h2>
                  </div>
                </div>
                <div
                  class="
                    MuiGrid-root
                    MuiGrid-item
                    MuiGrid-grid-xs-12
                    MuiGrid-grid-md-6
                  "
                >
                  <div
                    class="
                      MuiPaper-root
                      jss861
                      MuiPaper-elevation1 MuiPaper-rounded
                    "
                  >
                    <div>
                      <h2 style="font-size: 24px">累計感染者数</h2>
                      <h2 style="font-size: 32px">  人</h2>
                      <h3 style="font-size: 24px">前日比：＋22,828人</h3>
                      <h3 style="font-size: 24px">前々日比：＋42,055人</h3>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    MuiGrid-root
                    MuiGrid-item
                    MuiGrid-grid-xs-12
                    MuiGrid-grid-md-6
                  "
                >
                  <div
                    class="
                      MuiPaper-root
                      jss861
                      MuiPaper-elevation1 MuiPaper-rounded
                    "
                  >
                    <h2 style="font-size: 24px">累計死亡者数</h2>
                    <h2 style="font-size: 32px">{{ dead["死亡者数"] }} 人</h2>
                    <h3 style="font-size: 24px">前日比：＋34人</h3>
                    <h3 style="font-size: 24px">前々日比：＋70人</h3>
                  </div>
                </div>
                <div
                  class="
                    MuiGrid-root
                    MuiGrid-item
                    MuiGrid-grid-xs-12
                    MuiGrid-grid-md-6
                  "
                >
                  <div
                    class="
                      MuiPaper-root
                      jss861
                      MuiPaper-elevation1 MuiPaper-rounded
                    "
                  >
                    <h2 style="font-size: 24px">PCR検査陽性率</h2>
                    <h2 style="font-size: 32px">18.18%</h2>
                    <h3 style="font-size: 24px">前日：16.90%</h3>
                    <h3 style="font-size: 24px">前々日：14.23%</h3>
                  </div>
                </div>
              </div>
            </div>
            <p style="text-align: center; font-size: 24px">
              感染者数 更新日：<br />※対策病床使用率(参考) = 現在患者
              / 新型コロナ対策病床数<br /><a
                href="https://corona.go.jp/dashboard/"
                target="_blunk"
                rel="noopener noreferrer"
                >新型コロナウイルス感染症対策オープンデータ</a
              >を使用<br /><span
                >DATA:
                <a
                  href="https://creativecommons.org/licenses/by/4.0/deed.ja"
                  target="_blunk"
                  rel="noopener noreferrer"
                  >CC BY</a
                ></span
              ><span> </span
              ><span
                ><a
                  href="https://www.stopcovid19.jp/"
                  target="_blunk"
                  rel="noopener noreferrer"
                  >新型コロナウイルス対策ダッシュボード</a
                >を使用</span
              >
            </p>
          </div>
        </div>
      </div>
      <footer id="footer" class="jss8" data-testid="footer-tag">
        <div class="jss10">
          <p>©2021 Rakuraku Corona</p>
          <div>
            <h3 class="jss9">共同開発者</h3>
            <div>
              <div class="jss12">
                <p class="jss13">M.T</p>
                <p class="jss13">T.A</p>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  </body>
</template>

<script>
import axios from 'axios'
import Papa from 'papaparse'
// import Dead from '../components/index/TotalDead.vue'

function getData () {
  return Promise.all([
    // 対策病床使用率
    axios.get(process.env.API_URL + 'https://www.stopcovid19.jp/data/covid19japan_beds/latest.json'),
    // 累計死者数
    axios.get(process.env.API_URL + 'https://www.google.com/url?q=https://www.mhlw.go.jp/content/death_total.csv&sa=D&source=editors&ust=1629799331571000&usg=AOvVaw1bDS7xhfAzAbJZqs9_KTuN'),
    // 累計感染者数
    axios.get(process.env.API_URL + 'https://www3.nhk.or.jp/n-data/opendata/coronavirus/nhk_news_covid19_prefectures_daily_data.csv'),
    // PCR検査要請率
    axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'),
  ]).then(([usebed, dead, corona, pcr]) => {

    const ppdead = Papa.parse(dead.data, {
      // csvヘッダーをプロパティに変更
      header: true,
      // 文字列を数値に変換
      dynamicTyping: true,
      // 文字化け防止
      encoding: 'Shift-JIS',
      // エラーを取り除く
      skipEmptyLines: true,
      transformHeader(header) {
        if (header === '各地の感染者数_1日ごとの発表数') {
          return 'daily_infection'
        } else if (header === '各地の感染者数_累計') {
          return 'total_infection'
        } else if (header === '各地の死者数_1日ごとの発表数') {
          return 'daily_dead'
        } else if (header === '各地の死者数_累計') {
          return 'total_dead'
        } else if (header === '日付') {
          return 'date'
        } else if (header === '都道府県コード') {
          return 'pref_code'
        } else if (header === '都道府県名') {
          return 'pref_name'
        } else {
          return 'default'
        }
      },
    })

    const data = {}
    data.usebed= usebed.data
    data.dead = ppdead
    data.corona = corona.data
    data.pcr = pcr.data
    return Promise.resolve(data)

  

  })
}

export default {
  // components: { Dead },
   async asyncData () {
    const data = await getData()
    return {
      usebed: data.usebed,
      dead: data.dead,
      corona: data.corona,
      pcr: data.pcr
    }
  },

  data() {
    return {
      total: [],
      new_total_usebed:[],
      new_total_bed:[]
    }
  },
  created() {
        const tranceData = []
    for (let i = 0; i < this.usebed.length; i++) {
      tranceData.push({
        total_usebed: this.usebed[i]["入院者数"],
        total_bed: this.usebed[i]["入院患者受入即応病床数"],
      })
    }
    this.total = tranceData
    this.new_total_usebed = this.total.reduce((a,b) => a + b.total_usebed,0);
    this.new_total_bed = this.total.reduce((a,b) => a + b.total_bed,0);

  }
}
</script>
