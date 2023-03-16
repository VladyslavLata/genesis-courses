import axios from 'axios';

// const TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNWFlNDRiMC1jM2U5LTQzMmUtODkzNi01N2JiZDVlNzAxYjMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3OTM1MjAsImV4cCI6MTY3OTY5MzUyMH0.kMM8DKKZ2qaGfBKz_RQhEv-_gk3IgiOlpccBYSc1Bzg';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZmZiOTY0YS0yNmVjLTQ1MzgtOTJlZC01ODQwMDU2MmM4OWYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5NTk4NzYsImV4cCI6MTY3OTg1OTg3Nn0.Y3X5ZJU0bhh_-2k1uK28i1Q2vTxYsIzXZrYv4j6Ug8s';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1';

axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] =
//   'https://vladyslavlata.github.io/genesis-courses';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'true';
// const addAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const params = {
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNWFlNDRiMC1jM2U5LTQzMmUtODkzNi01N2JiZDVlNzAxYjMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3OTM1MjAsImV4cCI6MTY3OTY5MzUyMH0.kMM8DKKZ2qaGfBKz_RQhEv-_gk3IgiOlpccBYSc1Bzg',
// };

// export const getToken = async () => {
//   const respons = axios.get('/auth/anonymous?platform=subscriptions');
//   return respons.data;
// };

export const getAllCourses = async () => {
  // TOKEN = token;
  const respons = await axios.get('/core/preview-courses');
  return respons.data;
};
