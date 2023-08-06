import React from "react"
import { API } from "../api"

export const GetDoctors = () => {
  const [ doctors, setDoctors ] = React.useState(null)
  
  React.useEffect(() => {
    API.getDoctors()
      .then(res => setDoctors(res.data))
  }, [])

  return {
    doctors
  }
}