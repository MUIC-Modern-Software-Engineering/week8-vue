<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CounterButton></CounterButton>
    <OraclePageView></OraclePageView>
  </div>
</template>
<script lang="ts" setup>
import CounterButton from '@/components/CounterButton.vue';
import OraclePageView from '@/components/OraclePageView.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
