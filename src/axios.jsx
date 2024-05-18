import axios from "axios";
import { apiBaseUrl } from "./constats/constants";

const instance = axios.create({
  baseURL: apiBaseUrl,
});

export default instance;
