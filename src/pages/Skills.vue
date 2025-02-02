trl<script setup>
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

function handleKeyDown(event) {
  if (event.ctrlKey && ctrl.value) {
    ctrl.value.classList.add("pressed");
  }

  if (event.key === "k" && k.value) {
    k.value.classList.add("pressed");
  }

  if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    document.activeElement === input.value
      ? input.value.blur()
      : input.value.focus();
  }
}

function handleKeyUp(event) {
  if (event.key === "Control" && ctrl.value) {
    ctrl.value.classList.remove("pressed");
  }

  if (event.key === "k" && k.value) {
    k.value.classList.remove("pressed");
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("keyup", handleKeyUp);
});


</script>

<template>
  <div class="container">
    <p class="text-3xl font-semibold">My Skills</p>

    <div class="flex relative">
      <input
        ref="input"
        class="mt-2 w-full"
        type="text"
        placeholder="Search for a skills"
        v-model="prompt"
      />
      <div class="ctrlk flex gap-1">
        <div class="touch" ref="ctrl">ctrl</div>
        <div class="touch" ref="k">k</div>
      </div>
    </div>

    <div class="my-4">
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

  & > .pressed{
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.606),
      0px 0px 0 rgba(255, 255, 255, 0.606);
    transform: translateY(2px);
  }
}
</style>
