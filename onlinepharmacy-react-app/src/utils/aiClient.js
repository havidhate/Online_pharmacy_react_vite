import axios from 'axios';

const ai = axios.create({
  baseURL: process.env.REACT_APP_AI_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const requestRecommendation = (payload) =>
  ai.post('/recommend', payload).then(res => res.data);

export default ai;
