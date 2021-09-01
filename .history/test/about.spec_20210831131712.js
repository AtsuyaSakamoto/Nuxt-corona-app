import { mount } from '@vue/test-utils'
import About from '../pages/about.vue'

let wrapper
beforeEach(() => {
  wrapper = mount(About)
})
describe('Aboutのテスト', () => {
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('Aboutページのタイトルのタグ確認', () => {
    expect(wrapper.text()).toContain("当サイトに関して")
  })
  test('アンカータグの中身確認', () => {
    const source = wrapper.get("#source")
    expect(source.text()).toBe("日本放送協会（NHK） 提供: 都道府県ごとの感染者数の推移情報")
  })
  test('アンカータグの中身確認', () => {
    console.log(wrapper.contains("ul"))
  })
})