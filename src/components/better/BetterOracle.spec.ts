import { mount } from "@vue/test-utils";
import { describe, test, expect, afterEach, vi, beforeAll, afterAll } from "vitest";
import BetterOracle, { useOracle } from "./BetterOracle.vue";
import {ask} from './BetterOracle.service'
//https://vuejs.org/guide/scaling-up/testing.html#testing-composables

describe('Better Oracle', () => {
  test('can mount', () => {
    const wrapper = mount(BetterOracle)
    expect(wrapper.text()).toContain('Better')
  })
})

describe("Internal State Test(useOracle)", () => {
  test("useOracle", async () => {
    const oracle = useOracle()
    expect(oracle.answer.value).is.null
    oracle.question.value = 'hello world'
    await oracle.ask()
    expect(oracle.answer.value).is.not.null
  })
})
