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

export async function getAllModules(): Promise<any> {
  try {
    const data = await axios.get(`${API_URL}/modules`)
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function getClassesByModule(name: string): Promise<any> {
  try {
    const data = await axios.get(`${API_URL}/modules/${name}`)
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function updateModuleName(moduleName: string, newModuleName: string): Promise<any> {
  try {
    const data = await axios.put(`${API_URL}/modules/${moduleName}`, {newModuleName})
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function deleteModule(moduleName: string): Promise<any> {
  try {
    const data = await axios.delete(`${API_URL}/modules/${moduleName}`)
    return data
  } catch(err) {
    console.log(err)
  }
}