import axios from 'axios'

export const client = axios.create({
  headers: {
    Authorization: `Basic ${btoa('admin:admin')}`
  },
  baseURL: 'http://api.lpwd-alt.loc/wp-json'
})
