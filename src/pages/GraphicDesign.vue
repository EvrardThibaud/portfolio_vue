<script setup>
import { ref } from "vue";
import Skill from "../components/Skill.vue";
import { onMounted } from "vue";

const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);
const photoshop = skills.value.find((skill) => skill.id === 39);

const youtubeurs = ref([]);

const API_KEY = "AIzaSyCM5oAgZbKktibPLUYzy9jgmC2LLvDi8bY";

let channelId = "";

fetch(
  `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=Ashtax&key=${API_KEY}`
)
  .then((res) => res.json())
  .then((data) => {
    channelId = data.items[0].id.channelId;
    return fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${API_KEY}`
    );
  })
  .then((res) => res.json())
  .then((data) => {
    const channel = data.items[0];
    youtubeurs.value.push({
      name: channel.snippet.title,
      subscriberCount: channel.statistics.subscriberCount,
      img: channel.snippet.thumbnails.default.url,
    });
  })
  .catch((err) => console.error("Erreur :", err));

  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=LUH58bF86rE&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const video = data.items[0];
    console.log(data)
  });
</script>

<template>
  <div class="container">
    <h1 class="text-3xl font-semibold">Projects</h1>

    <Skill :skill="photoshop"></Skill>

    <template v-for="youtubeur in youtubeurs">
      <div>
        <img :src="youtubeur.img" :alt="youtubeur.name + ' profile picture'" />
        <h2>{{ youtubeur.name }}</h2>
        <p>{{ youtubeur.subscriberCount }} followers</p>
      </div>
    </template>
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
