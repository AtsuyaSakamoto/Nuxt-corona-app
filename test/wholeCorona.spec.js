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
          TotalData:[]
        }
      },
    })
  })
  const wrapper = shallowMount(WholeCorona , {
    store,
    localVue,
    propsData:{
      selected_pref_code: 1,
      datacollection: Object,
      chartLabels: [],
      chartData: [],
      dailyChartLabels: [],
      dailyChartData: [],
      graphSwich: true,
      graphOption: Object,
      myStyles: { posision: 'relative' },
    }
  })
  test('全国コロナ情報ページのHTML要素のテスト', () => {
    console.log(wrapper.html())
  })
  test('getLabelsのテスト', () => {
    expect(wrapper.vm.getLabels).toBe('2020-07-21') // 通る
  })

  test('getLabelsのテスト(落ちるパターン)', () => {
    expect(wrapper.vm.getLabels).toBe('2000-07-21') // NG
  })
})