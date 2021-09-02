import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import pcrCorona from '../pages/data/pcrCorona.vue'
import Content from "../components/pcrCorona/Content.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

// 親コンポーネント（pages/data/pcrCorona.vue）
describe('pcrCoronaコンポーネント（親）のテスト', () => {
  let store
  let wrapper
  let actions
  beforeEach(() => {
    actions = {
      setParseData: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        pcr:{
          pcr_test_date:["2021-04-01"],
          positive_num:[100],
          pcr_test_num:[500]
        }
      },
      actions
    })
    wrapper = shallowMount(pcrCorona, {
      store,
      localVue,
    })
  })

  test('Vueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('HTML要素が一致しているか', () => {
    console.log(wrapper.html())
    expect(wrapper.html()).toBe("<content-stub positivenum=\"100\" pcrtestdate=\"2021-04-01\" pcrtestnum=\"500\"></content-stub>"
    )
  })
  test('子要素のタブを含んでいる', () => {
    expect(wrapper.findAll("content-stub").length === 1)
  })

  test('computedプロパティのテスト', () => {
    expect(wrapper.vm.positiveNum).toMatchObject([100])
    expect(wrapper.vm.pcrTestDate).toMatchObject(["2021-04-01"])
    expect(wrapper.vm.pcrTestNum).toMatchObject([500])
  })
  test('fetchフックが存在することの確認', () => {
    expect(wrapper.vm.$options.fetch({ store})).toBeInstanceOf(Promise)
  })
  test('ationsのテスト', () => {
    expect(actions.setParseData).not.toBeCalled()
  })
})

// 子コンポーネント（components/pcrCorona/Content.vue）
describe('pcrCoronaの子要素のテスト', () => {
  let store 
  let wrapper
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        pcr:{
          pcr_test_date:"2020"
        }
      },
    })
    wrapper = shallowMount(Content, {
      store,
      localVue,
    })
  })
  test('Vueインスタンスが存在するのかの確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('pcrCoronaのタイトルテキストが一致している', () => {
    expect(wrapper.text()).toContain("PCR検査数と陽性者数の推移")
  })
  test('chartの子要素が存在する', () => {
    expect(wrapper.find("linechart-stub").exists() === true)
  })
  test('aタグの数の確認', () => {
    expect(wrapper.get("a").length === 1)
  })
})