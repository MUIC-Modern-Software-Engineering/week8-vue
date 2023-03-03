<template>
  <input 
  type="text" 
  value="text" 
  @change="$emit('change', $event)"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{text: string}>()
</script>