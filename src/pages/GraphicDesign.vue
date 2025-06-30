<script setup lang="ts">
import { ref } from "vue";

interface YouTubeVideo {
  title: string;
  thumbnail: string;
  viewCount: string;
}

interface YouTubeChannel {
  id: string;
  name: string;
  subscriberCount: string;
  img: string;
  videos: YouTubeVideo[];
}

const youtubeID = ref<{ id: string }[]>(
  JSON.parse(localStorage.getItem("youtubeID") || "[]")
);
const youtubeFetchedData = ref<YouTubeChannel[]>([]);

const LOCAL_KEY = "youtubeFetchedData";
const TIMESTAMP_KEY = "youtubeFetchedDataTimestamp";
const API_KEY = "AIzaSyCM5oAgZbKktibPLUYzy9jgmC2LLvDi8bY";

const timestamp = localStorage.getItem(TIMESTAMP_KEY);
const now = Date.now();
const lastFetchDate = ref("Never");

if (timestamp) {
  lastFetchDate.value = new Date(parseInt(timestamp)).toLocaleString();
}

if (
  !localStorage.getItem(LOCAL_KEY) ||
  !timestamp ||
  now - parseInt(timestamp) > 30 * 60 * 1000
) {
  fetchYouTubeDataSequentially().then(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(youtubeFetchedData.value));
    localStorage.setItem(TIMESTAMP_KEY, now.toString());
    lastFetchDate.value = new Date(now).toLocaleString();
  });
} else {
  youtubeFetchedData.value = JSON.parse(
    localStorage.getItem(LOCAL_KEY) || "[]"
  );
}

async function fetchYouTubeDataSequentially() {
  youtubeFetchedData.value = [];

  for (const youtubeur of youtubeID.value) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${youtubeur.id}&key=${API_KEY}`
      );
      const data = await res.json();
      const channel = data.items[0];

      youtubeFetchedData.value.push({
        id: youtubeur.id,
        name: channel.snippet.title,
        subscriberCount: channel.statistics.subscriberCount,
        img: channel.snippet.thumbnails.default.url,
        videos: [],
      });
    } catch (err) {
      console.error("Erreur :", err);
    }
  }
}

// fetch(
//   `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=LUH58bF86rE&key=${API_KEY}`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     youtubeurs.value[0].videos.push({
//       title: data.items[0].snippet.title,
//       thumbnail: data.items[0].snippet.thumbnails.maxres.url,
//       viewCount: data.items[0].statistics.viewCount,
//     });
//   });
</script>

<template>
  <div class="container">
    <h1 class="text-3xl font-semibold">Projects</h1>

    <p>Last update : {{ lastFetchDate }}</p>

    <template v-for="youtubeur in youtubeFetchedData" :key="youtubeur.id">
      <div>
        <img :src="youtubeur.img" :alt="youtubeur.name + ' profile picture'" />
        <h2>{{ youtubeur.name }}</h2>
        <p>{{ youtubeur.subscriberCount }} followers</p>

        <template v-for="video in youtubeur.videos" :key="video.title">
          <img :src="video.thumbnail" :alt="video.title + ' thumbnail'" />
          <h3>{{ video.title }}</h3>
          <p>{{ video.viewCount }} views</p>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
