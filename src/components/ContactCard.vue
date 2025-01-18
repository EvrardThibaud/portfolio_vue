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
  <div class="card flex justify-center items-center flex-row gap-2">
    <a
      href="https://www.linkedin.com/in/thibaud-evrard-869431258/"
      target="_blank"
      class="text-3xl hover"
    >
      <i class="fa-brands fa-linkedin"></i>
    </a>

    <div id="email">
      <p :class="['select-none', { 'text-success': email.isCopied }]">
        {{ email.content }}
      </p>
      <i
        :class="['fa-copy hover', email.isCopied ? 'fa-solid' : 'fa-regular']"
        @click="handleCopyEmail"
      ></i>
    </div>
  </div>
</template>

<style scoped>
#email {
  height: 1.875rem;
  /* background: linear-gradient(145deg, #121212, #0f0f0f); */
  padding: 0 1rem;
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.606);
  border-radius: 3px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 0.5rem;
}
</style>
