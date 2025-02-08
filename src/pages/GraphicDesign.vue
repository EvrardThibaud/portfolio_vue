<script setup></script>

<template>
  <p>Graphic Design</p>
  <img id="photoshop_logo" src="../../public/photoshop_logo.png" alt="" />

  <div id="youtube_card" class="box">
    <img src="../../public/youtube_logo.png" alt="" />
    <p>Youtube Thumbnails</p>
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
