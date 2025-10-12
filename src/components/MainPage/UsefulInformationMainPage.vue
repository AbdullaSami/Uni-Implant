<template>
  <div class="flex flex-col justify-center items-center py-12 md:py-20 px-4">
    <h1 class="text-base font-semibold text-[#C70A0C] my-6">{{$t('usefulInfo.sectionTitle')}}</h1>
    <h2 class=" text-3xl md:text-4xl font-bold text-gray-800">{{$t('usefulInfo.sectionSubtitle')}}</h2>
    <p class="text-center text-base text-gray-800 max-w-6xl mt-4 px-2 md:px-6">
      {{$t('usefulInfo.intro')}}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 my-10 md:my-16 w-full max-w-7xl">
      <!-- durability card -->
      <div class="flex flex-col justify-start items-center p-6 md:p-8 m-2 md:m-4 border rounded-xl shadow-lg">
        <img src="@/assets/information/durability.png" alt="">
        <div class="mt-6 md:mt-8">
        <h2 class="text-start w-full text-lg md:text-xl font-semibold text-[#C70A0C]">{{$t('usefulInfo.cards.durability.title')}}</h2>
        <p class="text-start text-[0.85rem] md:text-[0.8rem] text-gray-800">
          {{$t('usefulInfo.cards.durability.desc')}}
        </p>
        </div>
      </div>
      <!-- Aesthetics card -->
      <div class="flex flex-col justify-start items-center p-8  m-4 border rounded-xl shadow-lg">
        <img src="@/assets/information/Aesthetics.png" alt="">
        <div class="mt-6 md:mt-8">
        <h2 class="text-start w-full text-lg md:text-xl font-semibold text-[#C70A0C]">{{$t('usefulInfo.cards.aesthetics.title')}}</h2>
        <p class="text-start text-[0.85rem] md:text-[0.8rem] text-gray-800">
{{$t('usefulInfo.cards.aesthetics.desc')}}
        </p>
        </div>
      </div>
      <!-- Functionality card -->
      <div class="flex flex-col justify-start items-center p-8  m-4 border rounded-xl shadow-lg">
        <img src="@/assets/information/Function.png" alt="">
        <div class="mt-6 md:mt-8">
        <h2 class="text-start w-full text-lg md:text-xl font-semibold text-[#C70A0C]">{{$t('usefulInfo.cards.functionality.title')}}</h2>
        <p class="text-start text-[0.85rem] md:text-[0.8rem] text-gray-800">
{{$t('usefulInfo.cards.functionality.desc')}}
        </p>
        </div>
      </div>
      <!-- Safety card -->
      <div class="flex flex-col justify-start items-center p-8  m-4 border rounded-xl shadow-lg">
        <img src="@/assets/information/safety.png" alt="">
        <div class="mt-6 md:mt-8">
        <h2 class="text-start w-full text-lg md:text-xl font-semibold text-[#C70A0C]">{{$t('usefulInfo.cards.safety.title')}}</h2>
        <p class="text-start text-[0.85rem] md:text-[0.8rem] text-gray-800">
{{$t('usefulInfo.cards.safety.desc')}}
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>