import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZmZiOTY0YS0yNmVjLTQ1MzgtOTJlZC01ODQwMDU2MmM4OWYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5NTk4NzYsImV4cCI6MTY3OTg1OTg3Nn0.Y3X5ZJU0bhh_-2k1uK28i1Q2vTxYsIzXZrYv4j6Ug8s';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/core/preview-courses';

axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

export const getAllCourses = async () => {
  const respons = await axios.get('/');
  return respons.data;
};

export const getCourse = async id => {
  const respons = await axios.get(`/${id}`);
  return respons.data;
};
