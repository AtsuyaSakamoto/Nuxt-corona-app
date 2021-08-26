<template>
    <div id="root">
      <Dead />
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
            <h1 style="text-align: center">
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
                      {{ graphData[0].secure_bed }} %
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
                        {{ graphData[0].inpatient }} 人
                      </h2>
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
                    <h2 style="font-size: 32px">15,494人</h2>
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
              感染者数 更新日：{{ graphData[0].update }}
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
import Dead from '../components/index/TotalDead.vue'

export default {
  components: { Dead },

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
      // graphData: [],
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
    // console.log(this.graphData)
    // eslint-disable-next-line no-console
    // console.log(this.graphData2)
  },
}
</script>
