<script setup>
import {ref, onMounted} from 'vue';
import {moonOutline, notificationsOffOutline, notificationsOutline, sunnyOutline, toggle} from "ionicons/icons";
import {IonIcon} from "@ionic/vue";
import {useRoute} from "vue-router";

const isDarkMode = ref(false);
const notificationOn = ref(true);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  const newTheme = isDarkMode.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

const toggleNotification = () => {
  notificationOn.value = !notificationOn.value;
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  isDarkMode.value = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
});

</script>

<template>
<div id="settings-page" class="main-pages">
  <h1>Settings</h1>
  <section>
    <article>
    <h6>Darkmode</h6>
      <label class="switch">
        <input type="checkbox" @change="toggleTheme" :checked="isDarkMode">
        <span class="slider round">
          <ion-icon v-if="!isDarkMode" class="sunny-icon" :icon="sunnyOutline"></ion-icon>
          <ion-icon v-if="isDarkMode" :icon="moonOutline"></ion-icon>
        </span>
      </label>
    </article>
    <article>
    <h6>Notifications</h6>
      <label class="switch">
        <input type="checkbox" @change="toggleNotification" :checked="notificationOn">
        <span class="slider round">
          <ion-icon v-if="!notificationOn" :icon="notificationsOutline" class="notification-icon"></ion-icon>
          <ion-icon v-if="notificationOn" :icon="notificationsOffOutline"></ion-icon>
        </span>
      </label>
    </article>
  </section>
  </div>
</template>

<style scoped>
section {
  padding: 0 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch input {
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slider-color);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 6px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.sunny-icon {
  margin-left: auto;
}

.notification-icon {
  margin-left: auto;
}

ion-icon {
  font-size: 20px;
  color: var(--white-soft);
  z-index: 100
}

</style>