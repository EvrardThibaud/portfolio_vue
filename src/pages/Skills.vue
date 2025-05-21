trl
<script setup>
import SkillCard from "../components/SkillCard.vue";
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";
import { computed } from "vue";

const input = ref(null);
const ctrl = ref(null);
const k = ref(null);
const prompt = ref("");
const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);

const skillsSearched = computed(() => {
  const searchTerm = prompt.value.trim().toLowerCase();

  return searchTerm
    ? skills.value.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm)
      )
    : skills.value;
});

// Keyboard shortcut for Ctrl + K or Cmd + K

function handleKeyDown(event) {
  if ((event.ctrlKey || event.metaKey) && ctrl.value) {
    ctrl.value.classList.add("pressed");
  }

  if (event.key === "k" && k.value) {
    k.value.classList.add("pressed");
  }

  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    event.preventDefault();
    document.activeElement === input.value
      ? input.value.blur()
      : input.value.focus();

    // For mac
    setTimeout(() => {
      k.value.classList.remove("pressed");
    }, 100);
  }
}

function handleKeyUp(event) {
  if (event.key === "k" && k.value) {
    k.value.classList.remove("pressed");
  }
  if ((event.key === "Control" || event.key === "Meta") && ctrl.value) {
    ctrl.value.classList.remove("pressed");
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);

  if (navigator.userAgent.indexOf("Win") !== -1) {
    ctrl.value.textContent = "Ctrl";
  } else if (navigator.userAgent.indexOf("Mac") !== -1) {
    ctrl.value.textContent = "Cmd";
  }
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("keyup", handleKeyUp);
});

// Random skill if no skills match

const randomSkill = ref(null);

function setRandomSkill() {
  randomSkill.value =
    skills.value[Math.floor(Math.random() * skills.value.length)];
}

function handleTrySkills() {
  prompt.value = randomSkill.value.name;
  input.value.focus();
  setRandomSkill();
}

onMounted(() => {
  setRandomSkill();
});
</script>

<template>
  <div class="container">
    <p class="text-3xl font-semibold">My Skills</p>

    <div class="flex sticky top-0 z-10">
      <input
        ref="input"
        class="mt-2 w-full"
        type="text"
        placeholder="Search for a skills"
        v-model="prompt"
      />
      <div class="ctrlk flex gap-1">
        <div class="touch" ref="ctrl"></div>
        <div class="touch" ref="k">k</div>
      </div>
    </div>

    <div class="my-4">
      <template v-if="skillsSearched.length == 0">
        <p class="text-center opacity-75">No skills match your search. 👀</p>
        <p
          class="cursor-pointer text-center opacity-75"
          @click="handleTrySkills"
        >
          Try
          <span class="gradient-text">
            {{ randomSkill?.name }}
          </span>
        </p>
      </template>

      <template v-for="(skill, index) in skillsSearched" :key="skill.id">
        <SkillCard
          class="flex-1"
          :skill="skill"
          @click="handleOpenSkill(index)"
        ></SkillCard>
      </template>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide-fade-in {
  0% {
    transform: translateY(10vh);
    opacity: 0;
  }
  80% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    transform: translateY(10vh);

    opacity: 0;
  }
  100% {
    transform: translateY(20vh);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .skill_card {
    view-timeline-name: --item-timeline;
    animation: slide-fade-in both;
    animation-timeline: --item-timeline;
    animatio-range: contain 0% contain 50%;
  }
}

.ctrlk {
  position: absolute;
  right: 10px;
  top: 32%;

  & > .touch {
    font-size: smaller;
    padding: 0 3px;
    height: fit-content;
    font-family: "Courier New", Courier, monospace;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.606),
      0px 2px 0 rgba(255, 255, 255, 0.606);
    border-radius: 1px;
    background-color: #ffffff0d;
    transition: 0.1s ease all;
  }

  & > .pressed {
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.606),
      0px 0px 0 rgba(255, 255, 255, 0.606);
    transform: translateY(2px);
  }
}

.gradient-text {
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
