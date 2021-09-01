import { mount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'
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