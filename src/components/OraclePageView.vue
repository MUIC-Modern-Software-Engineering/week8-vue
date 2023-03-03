

<template>
  <div>
    <QuestionFormVue text="question" @change="onTextChange"/>
    <AskButton/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AskButton from './AskButton.vue';
import type QuestionFormVue from './QuestionForm.vue';

const question = ref('')

function onTextChange(event: Event){
  console.log(event)
  question.value = event.target!.value
}
</script>