<template>
    <div id="root">
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
                      {{ Math.round(((usebed.reduce((a ,b) => a + Number(b["入院者数"]), 0)) / (usebed.reduce((a ,b) => a + Number(b["入院患者受入即応病床数"]), 0)))*10000)/100 }} %

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
                      <h2 style="font-size: 32px">
                        {{ corona[corona.length - 1]["npatients"] }} 人
                      </h2>

                      <h3 style="font-size: 24px">前日比：{{ corona[corona.length - 1]["npatients"] - corona[corona.length - 2]["npatients"] }} ＋人</h3>
                      <h3 style="font-size: 24px">前々日比：{{ corona[corona.length - 1]["npatients"] - corona[corona.length - 3]["npatients"] }}  ＋人</h3>
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
                    <h2 style="font-size: 32px">{{ dead[dead.length - 1]["ndeaths"] }} 人</h2>
                    <h3 style="font-size: 24px">前日比：＋ {{ dead[dead.length - 1]["ndeaths"] - dead[dead.length - 2]["ndeaths"] }} 人</h3>
                    <h3 style="font-size: 24px">前々日比：＋ {{ dead[dead.length - 1]["ndeaths"] - dead[dead.length - 3]["ndeaths"] }} 人</h3>
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
                    <h2 style="font-size: 32px">{{ Math.round(pcr[pcr.length - 1]["adpatients"] / (pcr[pcr.length - 1]["npatients"] + pcr[pcr.length - 1]["adpatients"]) * 100000) / 100 }} % %</h2>
                    <h3 style="font-size: 24px">前日：{{ Math.round(pcr[pcr.length - 2]["adpatients"] / (pcr[pcr.length - 2]["npatients"] + pcr[pcr.length - 2]["adpatients"]) * 100000) / 100 }} % %</h3>
                    <h3 style="font-size: 24px">前々日：{{ Math.round(pcr[pcr.length - 3]["adpatients"] / (pcr[pcr.length - 3]["npatients"] + pcr[pcr.length - 3]["adpatients"]) * 100000) / 100 }} % %</h3>
                  </div>
                </div>
              </div>
            </div>
            <p style="text-align: center; font-size: 24px">
              感染者数 更新日：
              <br />※対策病床使用率(参考) = 現在患者 / 新型コロナ対策病床数<br /><a
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
</template>

<script>
import axios from 'axios'



function getData () {
  return Promise.all([
    // 対策病床使用率
    axios.get(process.env.API_URL + 'https://www.stopcovid19.jp/data/covid19japan_beds/latest.json'),
    // 累計感染者数
    axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'),
    // // 累計死亡者数
    axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json'),
    // // PCR検査陽性
    axios.get(process.env.API_URL + 'https://data.corona.go.jp/converted-json/covid19japan-npatients.json'),

  ]).then(([usebed,corona,dead,pcr]) => {

    const data = {}
    data.usebed = usebed.data
    data.corona = corona.data
    data.dead = dead.data
    data.pcr = pcr.data
    return Promise.resolve(data)
  })
}

export default {

  async asyncData () {
    const data = await getData()
    // eslint-disable-next-line no-unused-expressions
    return {
    usebed : data.usebed,
    corona : data.corona,
    dead : data.dead,
    pcr : data.pcr
    }

  },



  data() {
    return {

    }
  },
  created() {
  },

}
</script>
