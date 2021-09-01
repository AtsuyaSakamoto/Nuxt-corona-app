import { mount,createLocalVue } from '@vue/test-utils'
import Index from '../pages/index.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
let wrapper
beforeEach(() => {
  wrapper = mount(Index)
})

describe('トップページのテスト', () => {
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
    console.log(wrapper.html())
  })
})