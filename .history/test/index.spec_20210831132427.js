import { mount } from '@vue/test-utils'
import Index from '../pages/index.vue'

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