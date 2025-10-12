<template>
  <section class="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:px-6 lg:px-52 py-10 sm:py-16 mb-12 sm:mb-16 gap-8 sm:gap-12">
    <!-- Left Side: Contact Information -->
    <div class="w-full lg:w-2/5">
      <h2 class="text-xl sm:text-2xl font-semibold text-red-600 mb-2">{{$t('contactPage.left.title')}}</h2>
      <div class="w-full h-0.5 bg-red-500 mb-3 sm:mb-4"></div>

      <p class="text-gray-500 text-[14px] mb-12">
        {{$t('contactPage.left.addressLine1')}}<br />
        {{$t('contactPage.left.addressLine2')}}
      </p>

      <!-- Info Blocks -->
      <div class="space-y-8 lg:space-y-14">
        <!-- Head Office -->
        <div class="flex items-start gap-3 sm:gap-4">
          <div class="text-red-600 text-2xl">
            <img src="@/assets/contactUs/mi_location.png" alt="Location Icon" class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
          </div>
          <div>
            <h3 class="font-semibold text-red-600">{{$t('contactPage.left.headOfficeTitle')}}</h3>
            <p class="text-gray-700">{{$t('contactPage.left.headOfficeCountry')}}</p>
          </div>
        </div>

        <!-- Email -->
        <div class="flex justify-start items-center gap-3 sm:gap-4">
          <div class="text-red-600 text-2xl">
            <img src="@/assets/contactUs/oui_email.png" alt="Email Icon" class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
          </div>
          <div>
            <h3 class="font-semibold text-red-600">{{$t('contactPage.left.emailTitle')}}</h3>
            <p class="text-gray-700">{{$t('contactPage.left.emailAddress')}}</p>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex justify-start items-center gap-3 sm:gap-4">
          <div class="text-red-600 text-2xl">
            <img src="@/assets/contactUs/fluent_call-20-regular.png" alt="Phone Icon" class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
          </div>
          <div>
            <h3 class="font-semibold text-red-600">{{$t('contactPage.left.phoneTitle')}}</h3>
            <p class="text-gray-700">{{$t('contactPage.left.phoneNumber')}}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Email Form -->
    <div class="w-full lg:w-2/5">
      <h2 class="text-xl sm:text-2xl font-semibold text-red-600 mb-2">{{$t('contactPage.right.title')}}</h2>
      <div class="w-full h-0.5 bg-red-500 mb-4 sm:mb-6"></div>

      <form class="space-y-4 sm:space-y-5" @submit.prevent="onSubmit">
        <input
          type="text"
          :placeholder="$t('contactPage.right.placeholders.name')"
          name="from_name"
          v-model.trim="form.name"
          autocomplete="name"
          required
          class="w-full bg-[#0000000D] text-[#000000] placeholder-[#00000080] px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          :placeholder="$t('contactPage.right.placeholders.email')"
          name="reply_to"
          v-model.trim="form.email"
          autocomplete="email"
          required
          class="w-full bg-[#0000000D] text-[#000000] placeholder-[#00000080] px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          rows="4"
          :placeholder="$t('contactPage.right.placeholders.message')"
          name="message"
          v-model.trim="form.message"
          required
          class="w-full bg-[#0000000D] text-[#000000] placeholder-[#00000080] px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>

        <div class="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
          <input type="checkbox" class="mt-1" v-model="form.consent" required />
          <p>
            {{$t('contactPage.right.consent.prefix')}}
            <a href="#" class="text-red-600 underline">{{$t('contactPage.right.consent.personalData')}}</a>
            {{$t('contactPage.right.consent.and')}}
            <a href="#" class="text-red-600 underline">{{$t('contactPage.right.consent.privacy')}}</a>
            {{$t('contactPage.right.consent.suffix')}}
          </p>
        </div>

        <button
          type="submit"
          class="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold w-full py-2.5 sm:py-3 rounded-md transition"
        >
          {{$t('contactPage.right.submit')}}
        </button>

        <p v-if="status.success" class="text-green-600 text-sm">{{$t('contactPage.right.status.success')}}</p>
        <p v-if="status.error" class="text-red-600 text-sm">{{ status.error }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useI18n } from 'vue-i18n'

// TODO: Replace with your EmailJS credentials or load from environment variables
// Vite env example: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

const form = reactive({
  name: '',
  email: '',
  message: '',
  consent: false,
})

const submitting = ref(false)
const status = reactive({ success: false, error: '' })
const { t } = useI18n()

async function onSubmit() {
  status.success = false
  status.error = ''
  if (!form.name || !form.email || !form.message || !form.consent) return

  submitting.value = true
  try {
    // Optionally initialize with public key, or pass as third arg to send
    // emailjs.init(EMAILJS_PUBLIC_KEY)
    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
      consent: form.consent ? 'Yes' : 'No',
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    status.success = true
    form.name = ''
    form.email = ''
    form.message = ''
    form.consent = false
  } catch (err) {
    status.error = t('contactPage.right.status.error')
    // console.error(err)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
/* Optional: add subtle animation */
input, textarea {
  transition: box-shadow 0.2s ease-in-out;
}
</style>
