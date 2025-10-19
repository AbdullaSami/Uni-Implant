<script setup></script>

<template>
  <!-- Footer -->
  <footer
    id="footerEN"
    class="relative lg:text-left text-black bg-gradient-to-r from-gray-300 to-gray-100"
  >
    <!-- Section: Links -->
    <section class="pt-10 px-8 lg:px-24 relative z-10">
      <div class="container mx-auto px-4 mt-5">
        <!-- Grid row -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-3">
          <!-- Column 1: About -->
          <div class="mt-4">
            <img
              src="../assets/logo.png"
              alt="uni-implant Logo"
              class="pb-4 h-16"
            />
            <p class="text-gray-800 w-80 leading-relaxed">{{$t('footer.about.paragraph')}}</p>
          </div>

          <!-- Column 2: Useful Links -->
          <div class="mt-4">
            <h4
              class="font-semibold mb-4 text-lg uppercase tracking-wide relative inline-block"
            >
              {{$t('footer.usefulLinks.title')}}
              <span
                class="absolute -bottom-1 left-0 w-8 h-0.5 bg-red-600"
              ></span>
            </h4>
            <ul class="space-y-2 text-gray-800">
              <li><a href="#" class="hover:text-red-600">{{$t('footer.usefulLinks.Uni-ImplantImplants')}}</a></li>
              <li><a href="#" class="hover:text-red-600">{{$t('footer.usefulLinks.cementable')}}</a></li>
              <li><a href="#" class="hover:text-red-600">{{$t('footer.usefulLinks.overdenture')}}</a></li>
              <li><a href="#" class="hover:text-red-600">{{$t('footer.usefulLinks.multiunit')}}</a></li>
              <li><a href="#" class="hover:text-red-600">{{$t('footer.usefulLinks.digital')}}</a></li>
              <li><a href="#" class="hover:text-red-600">{{$t('footer.usefulLinks.surgicalKits')}}</a></li>
              <li><a href="#" class="hover:text-red-600">{{$t('footer.usefulLinks.productionArea')}}</a></li>
            </ul>
          </div>

          <!-- Column 3: Contact -->
          <div class="mt-4">
            <h4
              class=" font-semibold mb-4 text-lg uppercase tracking-wide relative inline-block"
            >
              {{$t('footer.contact.title')}}
              <span
                class="absolute -bottom-1 left-0 w-8 h-0.5 bg-red-600"
              ></span>
            </h4>

            <div class="flex items-center gap-3 mb-3 text-gray-800">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-5 w-5"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#c70a0c" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
              <span>{{$t('footer.contact.location')}}</span>
            </div>

            <div class="flex items-center gap-3 mb-3 text-gray-800">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-5 w-5"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#c70a0c" d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>
              <span>info@unimplant.com</span>
            </div>

            <div class="flex items-center gap-3 mb-5 text-gray-800">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-5 w-5"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#c70a0c" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
              <span>{{$t('footer.contact.phone')}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="container mx-auto px-4 text-center py-4 mt-10 bg-black text-white rounded-t-full">
      <p>{{$t('footer.copyright')}}</p>
    </div>
  </footer>
</template>
