<script setup>
import { ref } from "vue";
import Skill from "../components/Skill.vue";
import { onMounted } from 'vue'

const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);
const photoshop = skills.value.find(skill => skill.id === 39);

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://apis.google.com/js/api.js'
  script.async = true
  document.head.appendChild(script)
})

const API_KEY = "AIzaSyCM5oAgZbKktibPLUYzy9jgmC2LLvDi8bY"

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=Ashtax&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const channelId = data.items[0].id.channelId
    console.log("Channel ID :", channelId)

    // Requête pour récupérer les statistiques maintenant
    return fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`)
  })
  .then(res => res.json())
  .then(data => {
    const channel = data.items[0]
    console.log("Nom :", channel.snippet.title)
    console.log("Abonnés :", channel.statistics.subscriberCount)
  })
  .catch(err => console.error("Erreur :", err))

</script>

<template>
  <div class="container">

    <h1 class="text-3xl font-semibold">Projects</h1>
    
    <Skill :skill="photoshop"></Skill>
    
  </div>
</template>

<style scoped>
#photoshop_logo {
  height: 50px;
  width: 50px;
  /* -webkit-box-shadow: 0px 0px 10px 10px #001833;
  -moz-box-shadow: 0px 0px 10px 10px #001833; */
  box-shadow: 0px 0px 1px white;
  border-radius: 10px;
  /* border: 1px white solid; */
  margin-top: 10px;
}

#youtube_card {
  background: linear-gradient(
    145deg,
    hsla(0, 100%, 50%, 0.5),
    hsla(0, 100%, 50%, 0.3)
  );
  margin: 1rem 0;
  transition: all 0.5s ease-out;
  cursor: pointer;

  img {
    height: 20px;
  }

  p {
    white-space: nowrap;
    font-weight: 500;
  }

  &:hover {
    background: linear-gradient(
      145deg,
      hsla(0, 100%, 50%, 0.5),
      hsla(0, 100%, 50%, 0.35)
    );
  }
}
</style>
