import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'
import Content from "../components/topPage/Content.vue"

const localVue = createLocalVue()
localVue.use(Vuex)


// 親コンポーネント（pages/index.vue）
describe('トップページのテスト', () => {
  let store
  let wrapper 
  let actions 
  beforeEach(() => {

    actions = {
      fetchTotalData: jest.fn()
    }
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store({
      state: {
        totalInfection:{
          latestDate: "2021-09-01",
          totalInfection: 1300000,
          comparison_yesterday: 20000,
          comparison_oneWeek: 150000
        },
        totalDeath:{
          totalDeath: 15000,
          comparison_yesterday: 50,
          comparison_oneWeek:200
        }
      },
      actions
    })
    wrapper =shallowMount(Index,{store,localVue})
  })

  test('トップページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('トップページのHTML要素のテスト', () => {
    expect(wrapper.html()).toBe("<content-stub infectiondata=\"[object Object]\" deathdata=\"[object Object]\"></content-stub>")
  })
  test('fetchフックが存在することの確認', () => {
    expect(wrapper.vm.$options.fetch({ store})).toBeInstanceOf(Promise)
  })
  test('computedのテスト', () => {
    expect(wrapper.vm.infectionData).toMatchObject({
      latestDate: "2021-09-01",
      totalInfection: 1300000,
      comparison_yesterday: 20000,
      comparison_oneWeek: 150000
    })
    expect(wrapper.vm.deathData).toMatchObject({
      totalDeath: 15000,
      comparison_yesterday: 50,
      comparison_oneWeek:200
    })
  })
  test('ationsのテスト', () => {
    expect(actions.fetchTotalData).not.toBeCalled()
  })

})

// 子コンポーネント（components/topPage/Content.vue）
describe('トップページの子要素テスト', () => {
  let store
  let wrapper 

  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store({
      state: {
        totalInfection:{
          latestDate: "2021-09-01",
          totalInfection: 1300000,
          comparison_yesterday: 20000,
          comparison_oneWeek: 150000
        },
        totalDeath:{
          totalDeath: 15000,
          comparison_yesterday: 50,
          comparison_oneWeek:200
        }
      },

    })
    wrapper =shallowMount(Content,{
      store,
      localVue,
      propsData:{
        infectionData:{
          totalInfection:10000,
          comparison_yesterday:100,
          comparison_oneWeek: 500
        },
        deathData:{
          totalDeath: 10000,
          comparison_yesterday:50,
          comparison_oneWeek:200
        },
        pcrData:{
          positive_rate:10,
          positive_rate_yesterday:20,
          positive_rate_oneWeekAgo:30
        }
      }
    })
  })

  test('トップページ子要素のVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('子要素のタイトルテキストの確認', () => {
    expect(wrapper.text()).toContain("新型コロナウイルス国内感染状況")
  })
})