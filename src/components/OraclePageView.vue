<script setup lang="ts">
import AskButton from './AskButton.vue';
import { ref } from 'vue';

const question = ref('')

function ask() {
  console.log(question.value)
}
</script>
<template>
  <div>
    <input type="test" v-model="question"/>
    <AskButton @click="ask"></AskButton>
  </div>
</template> :value=