<script setup>

</script>

<template>
  <div class="logo">
    <div class="square"></div>
    <div class="logo-text">
      <p class="name">Real Estate Care</p>
      <p class="slogan">Caring is in our nature</p>
    </div>
  </div>
</template>

<style scoped>

.logo {
  display: flex;
  gap: 10px;
  align-items: center;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-text p {
  line-height: 1;
  width: 100%;
  text-align: left; /* Zorgt ervoor dat de tekst links uitgelijnd blijft */
    display: inline-block;
}

.name {
  font-size: 17px;
}

.slogan {
  font-size: 10px;
  letter-spacing: 1px;
}

.square {
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 3px solid white;
  transform: rotate(45deg);
  margin-left: 5px;
}

.square::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff; /* Witte rand als voorbeeldkleur */
  border-right: 2px solid #fff; /* Witte rand als voorbeeldkleur */
  transform: translate(-50%, -50%) rotate(-90deg);
}
</style>