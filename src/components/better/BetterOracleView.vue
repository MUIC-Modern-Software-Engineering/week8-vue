<script lang="ts">
export interface YesNoResponse {
  answer: string
  forced: boolean
  image: string
}
</script>
<script setup lang="ts">
// see https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
// and https://vuejs.org/guide/components/v-model.html
// and https://vuejs.org/guide/components/attrs.html
defineProps<{ modelValue: string; answer: YesNoResponse | null }>()
defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'ask'): void
}>()
</script>
<template>
  <div>
    <h1>Better Stateless Version</h1>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <button @click="$emit('ask')">Ask</button>
    <div>
      <span>{{ answer?.answer }}</span>
      <img :src="answer?.image" />
    </div>
  </div>
</template>
