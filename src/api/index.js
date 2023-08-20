import axios from "axios";

export const API = {
  getDoctors: () => axios.get('/doctors/'),
  postAppointment: (data) => axios.post('/appointment/', data),
  getNews: () => axios.get('/news/news'),
  postReview: (data) => axios.post('/reviews/', data),
  getGallery: () => axios.get('/news/gallery/'),
  getLicenses: () => axios.get('/news/licenses'),
  getReviews: () => axios.get('/reviews/'),
}