<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

const { data } = await useAsyncData(() =>
  queryContent("portofolio")
    .only([
      "title",
      "thumbnail",
      "shortdescription",
      "mainimage",
      "longdescription",
      "company",
      "location",
      "date",
    ])
    .find()
);
</script>

<template>
  <section
    class="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-6 p-4 sm:p-8 md:flex-row lg:p-16"
  >
    <div class="top-16 h-fit w-full max-w-[310px] md:sticky">
      <img src="/img/avatar.png" alt="avatar" class="mb-6 aspect-square h-36" />
      <h1 class="mb-4 block text-3xl font-bold text-gray-900">
        Adnan F. Muhammad
      </h1>
      <p class="mb-4 block text-sm text-gray-500">
        I’m Indonesian UI/UX designer passionate about creating user-friendly
        applications through innovative solutions.
      </p>
      <div class="flex gap-4">
        <ButtonsDownload
          href="https://storage.kickadnan.id/Documents/CV_Muhammad_Faizal_Adnan_2023.pdf"
          label="Download CV"
        />
        <ButtonsSosmed href="https://www.linkedin.com/in/kickadnan/">
          <IconsLinkedin class="aspect-square h-6" />
        </ButtonsSosmed>
        <ButtonsSosmed href="https://dribbble.com/KickAdnan">
          <IconsDribble class="aspect-square h-6" />
        </ButtonsSosmed>
        <ButtonsSosmed href="https://www.instagram.com/kickadnan/">
          <IconsInstagram class="aspect-square h-6" />
        </ButtonsSosmed>
      </div>
    </div>
    <div class="grid w-full grid-cols-12 gap-6">
      <div
        data-aos="fade-up"
        v-for="(portfolio, index) in sortNewest(data)"
        :class="`col-span-12 flex ${
          isVertical(index)
            ? 'aspect-square lg:col-span-5'
            : 'lg:col-span-7 lg:aspect-[12/8.5]'
        }`"
      >
        <CardsPortfolio :portfolio="portfolio" :index="index" />
      </div>
    </div>
  </section>
</template>
