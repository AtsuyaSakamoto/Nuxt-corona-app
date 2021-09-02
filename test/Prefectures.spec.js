import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import prefectures from '@/pages/data/prefectures.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('prefectures', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        prefectures: {
          prefecturesData: [
            {
              daily_dead: 10,
              daily_infection: 100,
              date: '2020/1/16',
              pref_code: 1,
              pref_name: '北海道',
              total_dead: 30,
              total_infection: 1000,
            },
            {
              daily_dead: 1,
              daily_infection: 10,
              date: '2020/1/16',
              pref_code: 2,
              pref_name: '青森',
              total_dead: 5,
              total_infection: 300,
            },
          ],
          selectedPrefCode: 5,
        },
      },
    })
  })

  test('コンポーネントが存在する', () => {
    const wrapper = shallowMount(prefectures, {
      store,
      localVue,
    })
    expect(wrapper.exists()).toBeTruthy()
    console.log(wrapper.html())
  })
  // test('非同期通信のテスト', async () => {
  //   const data = await fetch()
  //   expect(data).toBe({})
  //   const wrapper = shallowMount(prefectures, {
  //     store,
  //     localVue,
  //   })
  //   expect(wrapper.exists()).toBeTruthy()
  // })
  test('非同期通信のテスト', async () => {
    const axios = require('axios')
    function fetchData(n) {
      return axios.get('https://jsonplaceholder.typicode.com/posts/' + n)
    }
    const wrapper = shallowMount(prefectures, {
      store,
      localVue,
    })
    expect.assertions(1)
    const res = await fetchData(3)
    expect(res.data.id).toBe(3)
    console.log(wrapper)
  })
})
