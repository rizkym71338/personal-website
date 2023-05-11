<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const { portfolio, index } = defineProps(["portfolio", "index"]);
const {
  title,
  thumbnail,
  shortdescription,
  mainimage,
  longdescription,
  company,
  location,
  date,
} = portfolio;
</script>

<template>
  <div
    @click="openModal"
    :class="`flex w-full cursor-pointer overflow-hidden rounded-3xl bg-gray-100 duration-300 hover:ring-4 hover:ring-[#7E9EF550] ${
      isVertical(index) ? 'flex-col ' : 'flex-row'
    }`"
  >
    <div
      :class="`flex-none space-y-3 p-6 ${
        !isVertical(index) && 'max-w-[180px] sm:max-w-[250px]'
      }`"
    >
      <h2 class="text-sm font-semibold text-gray-900 sm:text-base">
        {{ title }}
      </h2>
      <p class="text-xs text-gray-500 sm:text-sm">
        {{ shortdescription }}
      </p>
    </div>
    <img
      :src="thumbnail"
      :alt="title"
      :class="`h-full ${
        isVertical(index)
          ? 'object-fill object-left'
          : 'max-h-[299px] md:max-h-[421px] lg:max-h-full'
      }`"
    />
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-300 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full flex-col items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel>
              <button
                @click="closeModal"
                class="mb-4 ml-auto mr-2 flex w-fit items-center justify-center rounded-full bg-white p-2 outline-none"
              >
                <IconsClose class="aspect-square w-6 text-gray-900" />
              </button>
              <div
                class="flex w-full max-w-4xl flex-col gap-6 rounded-[32px] bg-white p-6 sm:flex-row"
              >
                <img
                  :src="mainimage"
                  :alt="title"
                  class="h-fit w-full rounded-3xl object-cover sm:max-w-sm md:max-w-[480px]"
                />
                <div class="flex flex-col space-y-6">
                  <h1 class="block text-2xl font-bold text-gray-900">
                    {{ title }}
                  </h1>
                  <div class="flex flex-col space-y-2">
                    <p
                      class="block text-xs font-semibold text-gray-900 sm:text-sm"
                    >
                      Description
                    </p>
                    <p class="text-xs text-gray-500 sm:text-sm">
                      {{ longdescription }}
                    </p>
                  </div>
                  <div class="flex flex-col space-y-2">
                    <p
                      class="block text-xs font-semibold text-gray-900 sm:text-sm"
                    >
                      Company
                    </p>
                    <p class="text-xs text-gray-500 sm:text-sm">
                      {{ company }}
                    </p>
                  </div>
                  <div class="flex flex-col space-y-2">
                    <p
                      class="block text-xs font-semibold text-gray-900 sm:text-sm"
                    >
                      Location
                    </p>
                    <p class="text-xs text-gray-500 sm:text-sm">
                      {{ location }}
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
