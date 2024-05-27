<script setup>
import Logo from "@/components/icons/logo.vue";
import { IonPage, IonHeader, IonToolbar, IonContent, IonFooter, IonIcon, IonButton, IonButtons } from '@ionic/vue';
import {
  homeSharp,
  informationCircleOutline,
  searchOutline,
  settingsOutline
} from 'ionicons/icons';

import {onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';

const isSettingsPage = ref(false);
const route = useRoute();

const updateVisibility = () => {
  isSettingsPage.value = route.name === 'Settings';
};

onMounted(() => {
  updateVisibility();
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});

watch(route, () => {
  updateVisibility();
});

</script>

<template>

  <ion-page>
    <ion-header class="header">
      <ion-toolbar class="header-toolbar">
        <Logo />
        <ion-buttons v-if="!isSettingsPage" router-link="/settings" slot="end">
          <ion-icon  :icon="settingsOutline"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <router-view></router-view>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons class="footer-buttons">
          <ion-button router-link="/"  >
            <ion-icon :icon="homeSharp"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="searchOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="informationCircleOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>

</template>

<style scoped>

ion-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

ion-toolbar {
  padding: 0 10px;
}

.footer-buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 50px;
}


</style>
