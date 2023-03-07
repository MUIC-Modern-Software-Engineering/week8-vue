<script lang="ts">
import BetterOracleView, { type YesNoResponse } from './BetterOracleView.vue'
import { ask as askService } from './BetterOracle.service'
import { ref, type Ref } from 'vue'
export interface OracleState {
  question: Ref<string>
  answer: Ref<YesNoResponse | null>
  ask: () => Promise<void>
}
//There is also pinia which does similar thing.
export function useOracle(): OracleState {
  const question = ref('')
  const answer = ref(null)

  async function ask() {
    answer.value = await askService()
  }

  return { question, answer, ask }
}
</script>
<script setup lang="ts">
const oracle = useOracle()
</script>
<template>
  <BetterOracleView
    v-model="oracle.question.value"
    :answer="oracle.answer.value"
    @ask="oracle.ask"
  ></BetterOracleView>
</template>
