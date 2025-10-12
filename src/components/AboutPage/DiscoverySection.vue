<template>
  <div class="relative flex justify-center md:justify-start items-center px-6 md:px-16 py-10 md:py-24 m-6 md:m-32 shadow-2xl">
    <div class="flex flex-col w-full md:w-1/2">
      <img src="@/assets/about/discoverSectionBG.png" class="hidden md:block absolute w-[700px] right-4 top-1/2 -translate-y-1/2 z-10" alt="">
      <img src="@/assets/about/videoImage.png" class="relative md:absolute w-[650px] md:-right-4 md:top-1/2 md:-translate-y-1/2 z-10" alt="">
      <h2 class="text-2xl sm:text-3xl md:text-4xl py-2 md:py-4 font-semibold">{{$t('aboutPage.discovery.title')}}</h2>
      <p class="text-sm sm:text-base md:text-base py-2 md:py-4">
        {{$t('aboutPage.discovery.paragraph')}}
      </p>
    </div>
  </div>
</template>

<style scoped></style>

