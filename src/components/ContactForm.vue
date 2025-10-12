<template>
  <section class="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:px-6 lg:px-52 py-10 sm:py-16 mb-12 sm:mb-16 gap-8 sm:gap-12">
    <!-- Left Side: Contact Information -->
    <div class="w-full lg:w-2/5">
      <h2 class="text-xl sm:text-2xl font-semibold text-red-600 mb-2">Contact Information</h2>
      <div class="w-full h-0.5 bg-red-500 mb-3 sm:mb-4"></div>

      <p class="text-gray-500 text-[14px] mb-12">
        Dudullu OSB Mahallesi İmes 501 Sk. E Blok No:25<br />
        Ümraniye / İSTANBUL
      </p>

      <!-- Info Blocks -->
      <div class="space-y-8 lg:space-y-14">
        <!-- Head Office -->
        <div class="flex items-start gap-3 sm:gap-4">
          <div class="text-red-600 text-2xl">
            <img src="@/assets/contactUs/mi_location.png" alt="Location Icon" class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
          </div>
          <div>
            <h3 class="font-semibold text-red-600">Head Office</h3>
            <p class="text-gray-700">Saudi Arabia</p>
          </div>
        </div>

        <!-- Email -->
        <div class="flex justify-start items-center gap-3 sm:gap-4">
          <div class="text-red-600 text-2xl">
            <img src="@/assets/contactUs/oui_email.png" alt="Email Icon" class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
          </div>
          <div>
            <h3 class="font-semibold text-red-600">Email Us</h3>
            <p class="text-gray-700">Oxciraa@gmail.com</p>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex justify-start items-center gap-3 sm:gap-4">
          <div class="text-red-600 text-2xl">
            <img src="@/assets/contactUs/fluent_call-20-regular.png" alt="Phone Icon" class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
          </div>
          <div>
            <h3 class="font-semibold text-red-600">Call Us</h3>
            <p class="text-gray-700">+966538127976</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Email Form -->
    <div class="w-full lg:w-2/5">
      <h2 class="text-xl sm:text-2xl font-semibold text-red-600 mb-2">Send us an e-mail</h2>
      <div class="w-full h-0.5 bg-red-500 mb-4 sm:mb-6"></div>

      <form class="space-y-4 sm:space-y-5" @submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          v-model.trim="form.name"
          autocomplete="name"
          required
          class="w-full bg-[#0000000D] text-[#000000] placeholder-[#00000080] px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Email"
          name="reply_to"
          v-model.trim="form.email"
          autocomplete="email"
          required
          class="w-full bg-[#0000000D] text-[#000000] placeholder-[#00000080] px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          rows="4"
          placeholder="Message"
          name="message"
          v-model.trim="form.message"
          required
          class="w-full bg-[#0000000D] text-[#000000] placeholder-[#00000080] px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>

        <div class="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
          <input type="checkbox" class="mt-1" v-model="form.consent" required />
          <p>
            I have read and understood the
            <a href="#" class="text-red-600 underline">Personal Data Consent</a>
            and
            <a href="#" class="text-red-600 underline">Privacy and Data Protection Notice</a>
            and I expressly accept the terms.
          </p>
        </div>

        <button
          type="submit"
          class="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold w-full py-2.5 sm:py-3 rounded-md transition"
        >
          Submit
        </button>

        <p v-if="status.success" class="text-green-600 text-sm">Thank you! Your message has been sent.</p>
        <p v-if="status.error" class="text-red-600 text-sm">{{ status.error }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

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
    status.error = 'Failed to send message. Please try again later.'
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
