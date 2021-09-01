import { mount } from '@vue/test-utils'
import PrefecturesSelect from '@/components/prefectures/PrefecturesSelect.vue'

describe('PrefecturesSelect', () => {
  test('コンポーネントが存在する', () => {
    // PrefecturesSelectnコンポーネントをマウントする
    const wrapper = mount(PrefecturesSelect)
    // expect()の中身がtrueだったらテスト合格
    // expect(wrapper.exists()).toBeTruthy()
    console.log(wrapper.text())
  })
  test('emitイベントのテスト', () => {
    const wrapper = mount(PrefecturesSelect)
    wrapper.get('select').trigger('change')
    console.log(wrapper.emitted('select-prefecture')[0])
  })
})
