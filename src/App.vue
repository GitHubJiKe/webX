<script setup lang="ts">
import WebHeader from './components/WebHeader.vue';
import { NLoadingBarProvider } from "naive-ui";

</script>

<template>
  <NLoadingBarProvider>
    <div class="pb-4 flex flex-col justify-between gap-6">
      <WebHeader />
      <RouterView></RouterView>
    </div>
  </NLoadingBarProvider>
</template>

<style scoped></style>
