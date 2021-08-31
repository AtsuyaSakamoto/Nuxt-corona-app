import { mount } from '@vue/test-utils'
import Index from '../pages/index.vue'

let wrapper
beforeEach(() => {
  wrapper = mount(Index)
})

describe('Aboutのテスト', () => {
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })ct(wrapper.contains("ul")).toBe(true)
  })
})