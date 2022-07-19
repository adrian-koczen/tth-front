import axios, {AxiosInstance} from 'axios';

const HTTPInstance: AxiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:3000/',
  timeout: 1000,
});

export default HTTPInstance;
