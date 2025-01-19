<script setup>
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
  <div class="card flex items-center flex-row flex-wrap gap-2">
    <a
      href="https://www.linkedin.com/in/thibaud-evrard-869431258/"
      target="_blank"
      class="text-2xl flex"
    >
      <div class="small_card">
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </a>

    <div @click="handleCopyEmail" class="small_card">
      <p :class="['select-none', { 'text-success': email.isCopied }]">
        {{ email.content }}
      </p>
      <i :class="['fa-copy', email.isCopied ? 'fa-solid' : 'fa-regular']"></i>
    </div>
  </div>
</template>

<style scoped></style>
