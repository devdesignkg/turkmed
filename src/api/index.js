import axios from "axios";

export const API = {
  getDoctors: () => axios.get('/doctors/')
}