import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

type userInfosProps = {
  userEmail: string
  userPassword: string
}

export async function authenticateUser(userInfos: userInfosProps) {
  try {
    const { data } = await axios.post(`${API_URL}/user/login`, userInfos)
    localStorage.setItem('token', JSON.stringify(data))
    return data
  } catch (err) {
    console.log(err)
  }
}