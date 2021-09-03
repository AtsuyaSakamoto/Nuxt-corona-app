import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BedUsage from '../pages/data/bedUsage.vue'
import Content from "../components/bedUsage/Content.vue"
import Modal from "../components/bedUsage/Modal.vue"
// import { expect } from '@jest/globals'
const localVue = createLocalVue()
localVue.use(Vuex)

// 親コンポーネント（pages/data/bedusage.vue）
describe('病床使用率のテスト', () => {
  let store
  let wrapper 

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        bedusage:{
          bedUsageData : [{
            id:1,
            prefecture: "北海道",
            bed_use:"200"
          }]
        }
      },
    })
    wrapper =shallowMount(BedUsage,{store,localVue})
  })

  test('病床使用率のVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
    console.log(wrapper.html())
  })
  test('子要素を含んでいるのかの確認', () => {
    expect(wrapper.get("content-stub") === true)
  })
  test('fetchフックが存在することの確認', () => {
    expect(wrapper.vm.$options.fetch({ store})).toBeInstanceOf(Promise)
  })
  test('computedの確認', () => {
    expect(wrapper.vm.bedUsage).toMatchObject([{
      id:1,
      prefecture: "北海道",
      bed_use:"200"
    }])
  })
})

// 子コンポーネント（components/bedusage/Content.vue）
describe('病床使用率画面：表示コンポーネントのテスト', () => {
  let store
  let wrapper 

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        bedusage:{
          bedUsageData : [{
            id:1,
            prefecture: "北海道",
            bed_use:"200"
          }]
        }
      },
    })
    wrapper =shallowMount(Content,{
      store,
      localVue,
      propsData:{
        dataArry:[
          {id:1,prefecture:"北海道",updateDate:"2021"},
          {id:2,prefecture:"青森"},
          {id:3,prefecture:"秋田"},
        ],
      }
    })
  })
  test('Vueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
    console.log(wrapper.html())
  })
  test('プロップスデータを渡し、タイトルが正常に表示されているのかの確認', () => {
    expect(wrapper.get("#title").text()).toContain("都道府県別病床使用率（データ更新日：2021）")
  })
  test('click', () => {
    wrapper.get("#card").trigger('click')
  })
})


// 子コンポーネント（components/bedusage/Modal.vue）
describe('病床使用率のモーダルコンポーネントのテスト', () => {
  let store
  let wrapper 

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
      },
    })
    wrapper =shallowMount(Modal,{
      store,
      localVue,
      propsData:{
        modalData:{
          prefecture_name:"北海道",
          use_bed_rate_hospitalization:50,
          per_positive: 100,
          num_severe: 20,
          beds_num_hospitalization:300,
          num_hospitalization:400,
          source:"aaaaaaaaaaaaaa",
          updateDate:"2021-09-01"
        }
      }
    })
  })

  test('モーダルのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('propsdataでデータを渡し、タイトルで表示されている', () => {
    expect(wrapper.get("h1").text()).toBe("北海道 病床使用率50%")
  })
  test('dataプロパティのshowModalがFalseになっている', () => {
    expect(wrapper.vm.$data.showModal).toBeFalsy()
  })
  test('モーダルを閉じるボタンをクリック', () => {
    wrapper.get("button").trigger("click")
    wrapper.vm.showModal = true
    expect(wrapper.vm.showModal).toBeTruthy()
  })
  test('beforeUpdateフックが存在するのかの確認', () => {
    expect(wrapper.vm.$options.beforeUpdate).toBeInstanceOf(Array)
  })
  test('showメソッドを発火させるとshowModalがtrueになる', () => {
    wrapper.vm.show()
    expect(wrapper.vm.showModal).toBeTruthy()
  })
})
