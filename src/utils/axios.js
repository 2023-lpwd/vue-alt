import axios from 'axios'

export const client = axios.create({
  headers: {
    Authorization: `Basic ${btoa(`${import.meta.env.VITE_WP_USERNAME}:${import.meta.env.VITE_WP_PASSWORD}`)}`
  },
  baseURL: import.meta.env.VITE_WP_API_URL
})
