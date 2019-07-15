import axios from 'axios';

const axiosGraphQLAPI = axios.create({
  baseURL: 'http://localhost:3300/graphql',
});

export default axiosGraphQLAPI;