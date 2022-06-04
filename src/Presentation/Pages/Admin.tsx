import { useEffect, useState } from 'react'
import { getAllModules, getClassesByModule } from '../../services/api'
import { styled, css } from '../../styles'
import { Card } from '../Components/Card'
import { Header } from '../Components/Header'
import { AdminCard } from '../Components/AdminCard'

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$grey700',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Box = styled('div', {
  width: '100%',
  height: '100%',
  border: '1px solid red',

  display: 'flex'
})

const Title = styled('h1', {
  color: '$grey200'
})

export function Admin() {
  const [modulesList, setModulesList] = useState([])
  const [currentClasses, setCurrentClasses] = useState([])
  useEffect(() => {
    const getModules = async () => {
      const { status, data } = await getAllModules()

      if (status === 200) {
        setModulesList(data)
      }
    }
    getModules()
  }, [])

  const getClassesFromModule = async (name: string) => {
    const { status, data: { classes } } = await getClassesByModule(name)
    if (status === 200) {
      console.log(classes)
      setCurrentClasses(classes)
    }
  }
  return (
    <Container>
      <Header />
      <Box css={{

      }}>
        <Box css={{
          border: '1px solid yellow',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {
            modulesList &&
              modulesList.map(({ name, id }) => (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                margin: '5px 0'
              }}>
                <AdminCard 
                  key={id}
                  onClickFunction={ getClassesFromModule }
                  name={name}
                >
                  {name}
                </AdminCard>
              </div>
            ))
          }
        </Box>
        <Box css={{
          border: '1px solid yellow',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {
            currentClasses &&
              currentClasses.map(({ name, id }) => (
              <AdminCard
                key={id}
              >
                {name}
            </AdminCard>
            ))
          }
        </Box>
      </Box>

    </Container>
  )
}