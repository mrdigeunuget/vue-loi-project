<script setup>
import Logo from "@/components/icons/logo.vue";
import { IonPage, IonHeader, IonToolbar, IonContent, IonFooter, IonIcon } from '@ionic/vue';
import { settingsOutline } from 'ionicons/icons';
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar class="header-toolbar">
        <Logo />
        <ion-buttons slot="end">
          <ion-icon :icon="settingsOutline"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <HelloWorld />
    </ion-content>

    <ion-footer>
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


</style>
