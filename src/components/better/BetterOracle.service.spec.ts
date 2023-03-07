import { describe, test, expect, vi, afterEach, beforeEach } from 'vitest'
import { useOracle } from './BetterOracle.vue'
import {ask} from './BetterOracle.service'


describe('API Service', () => {
  function mockFetch(returnData: any){
    global.fetch = vi.fn().mockResolvedValue({json: () => Promise.resolve(returnData)})
  }

  beforeEach(() => {
    mockFetch({
      answer: 'yes',
      forced: false,
      image: 'hello.jpg'
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })
  
  test('ask', async () => {
    await ask()
    expect(fetch).toHaveBeenCalledWith('https://yesno.wtf/api', { method: 'GET' })
  })
})