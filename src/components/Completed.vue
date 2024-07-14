<script setup>
import { ref, onMounted } from 'vue';
import apiService from '@/services/apiService';

const reports = ref([]);

const fetchReports = async () => {
  try {
    const response = await apiService.getReports();
    reports.value = response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
  }
};

onMounted(() => {
  fetchReports();
});
</script>

<template>
  <div>
    <h1>Inspectierapporten</h1>
    <ul>
      <li v-for="report in reports" :key="report.id">
        <h2>{{ report.inspectionType }}</h2>
        <ul>
          <li v-for="(value, key) in report.fields" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>