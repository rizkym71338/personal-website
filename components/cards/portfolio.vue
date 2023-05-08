<script setup>
const { portfolio } = defineProps(["portfolio"]);
const { title, description, imagePath, isVertical } = portfolio;
</script>

<template>
  <div
    :class="`flex w-full overflow-hidden rounded-3xl bg-gray-100 ${
      isVertical ? 'flex-col ' : 'flex-row'
    }`"
  >
    <div
      :class="`flex-none space-y-3 p-6 ${
        !isVertical && 'max-w-[180px] sm:max-w-[250px]'
      }`"
    >
      <h2 class="text-sm font-semibold text-gray-900 sm:text-base">
        {{ title }}
      </h2>
      <p class="text-xs text-gray-500 sm:text-sm">
        {{ description }}
      </p>
    </div>
    <img
      :src="imagePath"
      :alt="title"
      :class="`h-full ${
        isVertical
          ? 'object-fill object-left'
          : 'max-h-[299px] md:max-h-[421px] lg:max-h-full'
      }`"
    />
  </div>
</template>
