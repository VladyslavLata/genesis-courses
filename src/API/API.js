import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNWFlNDRiMC1jM2U5LTQzMmUtODkzNi01N2JiZDVlNzAxYjMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3OTM1MjAsImV4cCI6MTY3OTY5MzUyMH0.kMM8DKKZ2qaGfBKz_RQhEv-_gk3IgiOlpccBYSc1Bzg';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/core/preview-courses';

axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

// const params = {
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNWFlNDRiMC1jM2U5LTQzMmUtODkzNi01N2JiZDVlNzAxYjMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3OTM1MjAsImV4cCI6MTY3OTY5MzUyMH0.kMM8DKKZ2qaGfBKz_RQhEv-_gk3IgiOlpccBYSc1Bzg',
// };

export const getAllCourses = async () => {
  const respons = await axios.get('/');
  return respons.data;
};
