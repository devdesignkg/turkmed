import axios from "axios";

export const API = {
  getDoctors: () => axios.get('/doctors/'),
  postAppointment: (data) => axios.post('/appointment/', data)
}