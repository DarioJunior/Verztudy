import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

type userInfosProps = {
  userEmail: string
  userPassword: string
}

export async function authenticateUser({ userEmail, userPassword }: userInfosProps) {
  try {
    const { data: { token, name, email, role } } = await axios.post(`${API_URL}/user/login`, {
      email: userEmail,
      password: userPassword
    })
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('role', JSON.stringify(role))
    return {
      name,
      email,
      role
    };
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getAllModulesByAdmin(): Promise<any> {
  try {
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const data = await axios.get(`${API_URL}/modules/admin`, {
      headers: {
        Authorization: jwt
      },
    })
    return data
  } catch(err) {
    console.log(err)
    return err
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

export async function updateClasseName(classeName: string, newClasseName: string): Promise<any> {
  try {
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const data = await axios.put(`${API_URL}/classes/${classeName}`,
    {
      newClasseName,
    }, {
      headers: {
        Authorization: jwt
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function updateModuleName(moduleName: string, newModuleName: string): Promise<any> {
  try {
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const data = await axios.put(`${API_URL}/modules/${moduleName}`,
    {
      newModuleName,
    }, {
      headers: {
        Authorization: jwt
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function deleteClasse(classeName: string): Promise<any> {
  try {
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const data = await axios.delete(`${API_URL}/classes/${classeName}`, 
    {
      headers: {
        Authorization: jwt
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function deleteModule(moduleName: string): Promise<any> {
  try {
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const data = await axios.delete(`${API_URL}/modules/${moduleName}`, 
    {
      headers: {
        Authorization: jwt
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function createClasse(classeName: string, moduleId: string) {
  try {
    console.log(classeName, moduleId)
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const data = await axios.post(`${API_URL}/classes`, {
      classeName,
      moduleId
    }, {
      headers: {
        Authorization: jwt
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function createModule(moduleName: string): Promise<any> {
  try {
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const data = await axios.post(`${API_URL}/modules/`, {
     moduleName
    }, {
      headers: {
        Authorization: jwt
      }
    })
    return data
  } catch(err) {
    console.log(err)
  }
}

export async function getClassesByModuleAsAdmin(moduleName: string): Promise<any> {
  try {
    const localStorageToken = localStorage.getItem('token') || ''
    const jwt = JSON.parse(localStorageToken)
    const response = await axios.get(`${API_URL}/classes/admin/${moduleName}`, {
      headers: {
        Authorization: jwt
      }
    })
    return response
  } catch(err) {
    console.log(err)
  }
}