<script setup lang="ts">
import { ref, type Ref } from 'vue'
interface YesNoResponse {
  answer: string
  forced: boolean
  image: string
}

const question = ref('')
const answer: Ref<YesNoResponse | null> = ref(null)

async function ask() {
  const res = await fetch('https://yesno.wtf/api', { method: 'GET' })
  answer.value = await res.json()
}
</script>

<template>
  <div>
    <h1>Spaghetti Version (Fine for small apps.)</h1>
    <input type="text" v-model="question" />
    <button @click="ask">Ask</button>
    <div>
      <img :src="answer?.image" />
      <span>{{ answer?.answer }}</span>
    </div>
  </div>
</template>
