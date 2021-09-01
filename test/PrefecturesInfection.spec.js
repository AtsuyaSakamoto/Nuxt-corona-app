import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PrefecturesInfection from '@/components/prefectures/PrefecturesInfection.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PrefecturesInfection', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
    })
  })

  test('コンポーネントが存在する', () => {
    // PrefecturesInfectionコンポーネントをマウントする
    const wrapper = shallowMount(PrefecturesInfection, { store, localVue })
    // expect()の中身がtrueだったらテスト合格
    // expect(wrapper.exists()).toBeTruthy()
    console.log(wrapper.text())
  })
})
