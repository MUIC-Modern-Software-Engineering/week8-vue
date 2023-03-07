import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import CounterButton from '../CounterButton.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('CounterButton', () => {
  it('renders properly', () => {
    const wrapper = mount(CounterButton)
    expect(wrapper.text()).toContain('Click Me!')
  })

  it('increases the number when we click', async () => {
    const wrapper = mount(CounterButton)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })

  it('increases the number data when we click', async () => {
    const wrapper = mount(CounterButton)
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    const vm = wrapper.vm as any
    expect(vm.count).toBe(2)
  })
})
