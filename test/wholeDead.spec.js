import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import WholeCorona from '../components/wholeCountry/WholeCorona.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('全国コロナ情報ページのテスト', () => {
  let store
  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store({
      state: {
        wholeCountry:{
          TotalDead:[]
        }
      },
    })
  })
  const wrapper = shallowMount(WholeCorona , {
    store,
    localVue,
    propsData:{
      selected_pref_code: 1,
      datacollection: {},
      chartLabels: [],
      chartData: [],
      dailyChartLabels: [],
      dailyChartData: [],
      graphSwich: true,
      graphOption: {},
      myStyles: { posision: 'relative' },
    }
  })
  test('全国コロナ情報ページのHTML要素のテスト', () => {
    console.log(wrapper.html())
  })
})