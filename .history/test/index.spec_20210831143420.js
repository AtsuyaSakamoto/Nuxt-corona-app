import { mount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('トップページのテスト', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        totalI
      },
    })
  })

  test('AboutページのVueインスタンスが存在するのか確認', () => {
    const wrapper = mount(Index,{store,localVue})
    console.log(wrapper.html())
  })
})