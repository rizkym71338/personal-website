<script setup>
const { href } = defineProps(["href"]);
</script>

<template>
  <NuxtLink :to="href">
    <button class="flex-none rounded-lg border border-gray-200 p-2">
      <slot />
    </button>
  </NuxtLink>
</template>
