<script setup lang="ts">
import QuestionForm from './QuestionForm.vue';
import AskButton from './AskButton.vue';
</script>
<template>
  <div>
    <QuestionForm :text="`hello`"></QuestionForm>
    <AskButton></AskButton>
  </div>
</template>