<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increase">Click Me!</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

function increase() {
  count.value++
}
</script>
