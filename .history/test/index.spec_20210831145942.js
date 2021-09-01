import { shallowMount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('トップページのテスト', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
      },
    })
  })

  test('AboutページのVueインスタンスが存在するのか確認', () => {
    const wrapper =shallowMount(Index,{store,localVue})
    expect(wrapper.vm).toBeTruthy()
  })
})