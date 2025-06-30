<script setup lang="ts">
import { ref } from "vue";
const email = ref({ content: "thibaudevrard@outlook.com", isCopied: false });

function handleCopyEmail() {
  navigator.clipboard
    .writeText("thibaudevrard@outlook.com")
    .then(() => {
      email.value = { content: "Email copied to clipboard !", isCopied: true };
      setTimeout(() => {
        email.value = { content: "thibaudevrard@outlook.com", isCopied: false };
      }, 4000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
</script>

<template>
  <div class="card">
    <p class="text-3xl font-semibold leading-7">Thibaud Evrard</p>
    <p class="font-light opacity-75">
      <i class="fa-solid fa-location-dot text-sm"></i> Geneva, Switzerland
    </p>
    <p class="text-justify pt-2 leading-6">
      I'm a 20-years-old computer science student with a deep passion for web
      development.
    </p>

    <div class="mt-4 flex justify-between flex-wrap gap-2 ">
      <a href="cv_thibaud_evrard.pdf" target="_blank">
        <div class="button">
          <p>My CV</p>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </a>

      <a
        href="https://github.com/EvrardThibaud"
        target="_blank"
        class="text-2xl flex"
      >
        <div class="button">
          <i class="fa-brands fa-github"></i>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/thibaud-evrard-869431258/"
        target="_blank"
        class="text-2xl flex"
      >
        <div class="button">
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </a>

      <div @click="handleCopyEmail" class="button">
        <p :class="['select-none', { 'text-success': email.isCopied }]">
          {{ email.content }}
        </p>
        <i :class="['fa-copy', email.isCopied ? 'fa-solid' : 'fa-regular']"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
