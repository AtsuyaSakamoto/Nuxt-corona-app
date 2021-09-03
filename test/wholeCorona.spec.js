import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import wholeCorona from '../components/wholeCountry/WholeCorona.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('WholeCoronaのテスト', () => {
  let store
  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store({
      state: {
        wholeCountry:{
          TotalData:[
            {
              date: '2020-04-21',
              npatients:11350,
              adpatients:370
            },
          ]
        }
      },
    })
  })
  test('inputタグのイベント発火テスト', () => {
    const wrapper = shallowMount(wholeCorona, {
      store,
      localVue,
    })
    wrapper.get('input').trigger('change')
  })

  test('getTodayLabels メソッド', () => {
    const wrapper = shallowMount(wholeCorona, {
      store,
      localVue,
    })
    wrapper.vm.getTodayLabels()
    const dailyChartLabels = wrapper.vm.dailyChartLabels
    expect(dailyChartLabels).not.toBe([])
  })

  test('getTodayChartData メソッド', () => {
    const wrapper = shallowMount(wholeCorona, {
      store,
      localVue,
    })
    wrapper.vm.getTodayChartData()
    expect(wrapper.vm.dailyChartData).not.toBe([])
  })

  test('dailyGraph メソッド', () => {
    const wrapper = shallowMount(wholeCorona, {
      store,
      localVue,
    })
    wrapper.vm.dailyGraph()
  })
  test('changeGraph メソッドの条件分岐', () => {
    const wrapper = shallowMount(wholeCorona, {
      store,
      localVue,
    })
    wrapper.vm.changeGraphTeam()
    if (wrapper.vm.graphSwich === true) {
      wrapper.vm.fillData()
    } else {
      wrapper.vm.dailyGraph()
    }

    wrapper.vm.graphSwich = false
    wrapper.vm.changeGraphTeam()
    if (wrapper.vm.graphSwich === true) {
      wrapper.vm.fillData()
    } else {
      wrapper.vm.dailyGraph()
    }
  })
})