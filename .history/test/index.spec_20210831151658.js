import { shallowMount,createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import axios from "axios"
import Vuex from 'vuex'
import Index from '../pages/index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({data:[
    {id:1, name: "naoki"},
    {id:2, name: "ki"},
  ]}))
})
)


describe('トップページのテスト', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
      },
    })
  })

  test('トップページのVueインスタンスが存在するのか確認', () => {
    const wrapper =shallowMount(Index,{store,localVue})
    expect(wrapper.vm).toBeTruthy()
  })
  test('トップページのHTML要素のテスト', () => {
    const wrapper =shallowMount(Index,{store,localVue})
    expect(wrapper.html()).toBe("<content-stub></content-stub>")
  })
})