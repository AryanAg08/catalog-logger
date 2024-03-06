import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://nsut-backend-0f7548004ed1.herokuapp.com/api/",
  withCredentials: true,
});