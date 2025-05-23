
import axios, { type AxiosInstance } from "axios";

export const baseApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000", // env.VITE_API_URL,
})

/*
  If turned on, an interceptor is placed on the axios request.
  The interceptor is passed the request object and then returns a
  Promise that calls the resolve method after a 1000ms delay
*/
const slowing = true // env.VITE_TEST_SLOW_API

if (slowing) {
  console.log("Slowing API")
  baseApi.interceptors.request.use((req) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(req)
      }, 1000)              
    })
  })
}
