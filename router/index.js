import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from "@/components/MainComponent.vue";
import Scheduled from "@/components/Scheduled.vue";
import Completed from "@/components/Completed.vue";
import KnowledgeBase from "@/components/KnowledgeBase.vue";
import Settings from "@/components/Settings.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scheduled-tasks',
    name: 'ScheduledTasks',
    component: Scheduled
  },
  {
    path: '/completed-tasks',
    name: 'CompletedTasks',
    component: Completed
  },
  {
    path: '/knowledge-base',
    name: 'KnowledgeBase',
    component: KnowledgeBase
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;