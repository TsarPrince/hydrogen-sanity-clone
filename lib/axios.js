import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://1mwa-strapi.tech',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
  },
})

export default axiosInstance
