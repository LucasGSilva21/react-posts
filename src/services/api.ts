import axios from 'axios';

export const jsonPlaceHolderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});
