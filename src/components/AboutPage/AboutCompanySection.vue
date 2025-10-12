<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-36 text-start mt-8 md:mt-12">
    <div class="flex justify-center items-center">
    <img
      src="@/assets/about/aboutSection.png"
      alt="about section image"
      class="w-full max-w-md md:max-w-none h-auto md:h-5/6 object-cover"
    />
    </div>
    <div class="flex flex-col justify-center mt-8 md:mt-0">
      <h2 class="text-2xl md:text-4xl font-semibold text-black py-4">{{$t('aboutPage.aboutCompany.title')}}</h2>
      <p class="text-gray-900 text-base leading-relaxed">
        {{$t('aboutPage.aboutCompany.paragraph')}}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
