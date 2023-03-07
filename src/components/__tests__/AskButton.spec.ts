import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AskButton from '../AskButton.vue'

describe('AskButton', () => {
  it('mounts', () => {
    const wrapper = mount(AskButton)
    expect(wrapper.text()).toContain('Ask')
  })
  it('emit asked when clicked', async () => {
    const wrapper = mount(AskButton)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted().asked).toBeTruthy()
  })
})
