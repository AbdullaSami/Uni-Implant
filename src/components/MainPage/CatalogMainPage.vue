<template>
  <div class="h-auto md:h-[80%] grid grid-cols-1 md:grid-cols-2 md:gap-8 px-4 md:px-0">

    <!-- Left side (Image) -->
    <div class="flex justify-center items-center py-10 md:py-16">
      <img 
        class="h-auto w-10/12 sm:w-3/4 md:w-[70%] transform -rotate-6 drop-shadow-2xl" 
        src="@/assets/catalog.png" 
        alt="catalog">
    </div>

    <!-- Right side (Text content) -->
    <div class="flex flex-col justify-center items-center md:pt-16 pb-16 md:pb-32 ">
      <div class="h-full flex flex-col justify-center items-center m-4 p-6 md:p-12 rounded-2xl 
      bg-[url(@/assets/catalogTextBG.png)] bg-cover bg-center bg-no-repeat
       shadow-md text-center">
        <h2 class="text-2xl md:text-4xl font-bold mb-4 text-gray-900">{{$t('catalogMainPage.title')}}</h2>
        <p class="mb-6 px-4 md:px-16 text-gray-700">
          {{$t('catalogMainPage.paragraph1')}} 
          {{$t('catalogMainPage.paragraph2')}}
        </p>

        <router-link
          :to="{ name: 'app.products' }"
          class="flex justify-center items-center w-full sm:w-64 bg-[#C70A0C] text-white text-lg font-semibold p-2 rounded-md hover:bg-white hover:text-[#C70A0C] border-2 border-[#C70A0C] transition-colors duration-300">
          {{$t('catalogMainPage.button')}}
          <svg xmlns="http://www.w3.org/2000/svg" class="pl-2 h-7" viewBox="0 0 640 640">
            <path fill="currentColor" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
          </svg>
        </router-link>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
