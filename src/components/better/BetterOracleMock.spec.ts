import { describe, test, expect, afterEach, vi, beforeAll, afterAll } from "vitest";
import { useOracle } from "./BetterOracle.vue";

vi.mock('./BetterOracle.service.ts', () => ({
  ask: vi.fn().mockResolvedValue({
    answer: 'yes',
    forced: false,
    image: 'hello.jpg'
  })
}))


describe("Internal State Test(useOracle) with Mock", () => {
  test("useOracle with Mock", async () => {
    const oracle = useOracle()
    oracle.question.value = 'hello world'
    await oracle.ask()
    expect(oracle.answer.value?.image).toBe('hello.jpg')
  })

  test("useOracle with Mock2", async () => {
    const oracle = useOracle()
    oracle.question.value = 'hello worl3d'
    await oracle.ask()
    expect(oracle.answer.value?.image).toBe('hello.jpg')
  })
})