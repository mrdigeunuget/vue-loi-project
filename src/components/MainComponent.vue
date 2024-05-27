<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon, IonContent } from '@ionic/vue';
import {bookmarkOutline, checkmarkCircleOutline, gridOutline, settingsOutline} from 'ionicons/icons';

const router = useRouter();

const options = ref([
  { icon: bookmarkOutline, title: 'Scheduled', route: '/scheduled-tasks' },
  { icon: checkmarkCircleOutline, title: 'Completed', route: '/completed-tasks' },
  { icon: gridOutline, title: 'Knowledge base', route: '/knowledge-base' },
  { icon: settingsOutline, title: 'Settings', route: '/settings' },
]);

</script>

<template>
  <ion-content>
    <ion-grid class="full-height">
      <ion-row class="full-height">
        <ion-col size="6" v-for="option in options" :key="option.title">
          <ion-card :router-link="option.route" class="option-card">
            <ion-card-content class="card-content">
              <ion-icon :icon="option.icon" class="card-icon"></ion-icon>
              <div class="card-title">{{ option.title }}</div>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
</template>

<style scoped>
.full-height {
  height: 100%;
}

ion-row {
  align-items: stretch; /* Ensure rows take up full height */
}

ion-col {
  display: flex;
  align-items: stretch; /* Ensure columns take up full height */
}

.option-card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
}

.card-icon {
  font-size: 64px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 18px;
}

ion-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
}
</style>