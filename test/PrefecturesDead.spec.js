import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PrefecturesDead from '@/components/prefectures/PrefecturesDead.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PrefecturesDead', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        prefectures: {
          prefecturesData: [
            {
              daily_dead: 10,
              daily_infection: 100,
              date: '2020/1/16',
              pref_code: 1,
              pref_name: '北海道',
              total_dead: 30,
              total_infection: 1000,
            },
            {
              daily_dead: 1,
              daily_infection: 10,
              date: '2020/1/16',
              pref_code: 2,
              pref_name: '青森',
              total_dead: 5,
              total_infection: 300,
            },
          ],
          selectedPrefCode: 5,
        },
      },
    })
  })

  test('inputタグのイベント発火テスト', () => {
    const wrapper = shallowMount(PrefecturesDead, {
      store,
      localVue,
    })
    wrapper.get('input').trigger('change')
  })

  test('getTodayLabels メソッド', () => {
    const wrapper = shallowMount(PrefecturesDead, {
      store,
      localVue,
    })
    wrapper.vm.getTodayLabels()
    const dailyChartLabels = wrapper.vm.dailyChartLabels
    expect(dailyChartLabels).not.toBe([])
  })

  test('getTodayChartData メソッド', () => {
    const wrapper = shallowMount(PrefecturesDead, {
      store,
      localVue,
    })
    wrapper.vm.getTodayChartData()
    expect(wrapper.vm.dailyChartData).not.toBe([])
  })

  test('dailyGraph メソッド', () => {
    const wrapper = shallowMount(PrefecturesDead, {
      store,
      localVue,
    })
    wrapper.vm.dailyGraph()
  })

  test('changeGraph メソッドの条件分岐', () => {
    const wrapper = shallowMount(PrefecturesDead, {
      store,
      localVue,
    })
    wrapper.vm.changeGraph()
    if (wrapper.vm.graphSwich === true) {
      wrapper.vm.fillData()
    } else {
      wrapper.vm.dailyGraph()
    }

    wrapper.vm.graphSwich = false
    wrapper.vm.changeGraph()
    if (wrapper.vm.graphSwich === true) {
      wrapper.vm.fillData()
    } else {
      wrapper.vm.dailyGraph()
    }
  })
})
