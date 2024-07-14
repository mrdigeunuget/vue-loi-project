import axios from 'axios';
import Report from "@/models/reports.js";

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mrdigeunuget/vue-loi-project',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  async getReports() {
    const response = await apiClient.get('/reports');
    return response.data.map(reportData => new Report(reportData));
  },
  async getReport(id) {
    const response = await apiClient.get(`/reports/${id}`);
    return new Report(response.data);
  }
};