<template>
  <input type="text" :value="value" @input="$emit('input', $event)" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{ value: string }>()
</script>
