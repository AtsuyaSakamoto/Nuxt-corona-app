import { mount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'
const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store({
  state: {},
})
let wrapper
beforeEach(() => {
  wrapper = mount(Index,{
    localVue
  })
})

describe('トップページのテスト', () => {
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
    console.log(wrapper.html())
  })
})