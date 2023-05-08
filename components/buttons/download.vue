<script setup>
const { label, href } = defineProps(["label", "href"]);
</script>

<template>
  <NuxtLink :to="href">
    <button
      class="flex items-center space-x-2.5 rounded-lg border border-gray-200 p-2"
    >
      <IconsDownload class="aspect-square h-6 flex-none" />
      <span
        class="flex-none bg-gradient-to-br from-[#7E9EF5] to-[#63BFD8] bg-clip-text text-xs font-semibold text-transparent"
      >
        {{ label }}
      </span>
    </button>
  </NuxtLink>
</template>
