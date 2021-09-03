import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import wholeDead from '../components/wholeCountry/WholeDead.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('WholeDeadのテスト', () => {
  let store
  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store({
      state: {
        wholeCountry:{
          TotalDead:[
            {
              date: '2020-04-21',
              ndeaths:277,
            },
          ]
        }
      },
    })
  })
  test('inputタグのイベント発火テスト', () => {
    const wrapper = shallowMount(wholeDead, {
      store,
      localVue,
    })
    wrapper.get('input').trigger('change')
  })

  test('getTodayLabels メソッド', () => {
    const wrapper = shallowMount(wholeDead, {
      store,
      localVue,
    })
    wrapper.vm.getTodayLabels()
    const dailyChartLabels = wrapper.vm.dailyChartLabels
    expect(dailyChartLabels).not.toBe([])
  })

  test('getTodayChartData メソッド', () => {
    const wrapper = shallowMount(wholeDead, {
      store,
      localVue,
    })
    wrapper.vm.getTodayChartData()
    expect(wrapper.vm.dailyChartData).not.toBe([])
  })

  test('dailyGraph メソッド', () => {
    const wrapper = shallowMount(wholeDead, {
      store,
      localVue,
    })
    wrapper.vm.dailyGraph()
  })
})