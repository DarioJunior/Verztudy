import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllModulesByAdmin, getClassesByModule } from '../../services/api'
import { styled } from '../../styles'

import { Header } from '../Components/Header'
import { AdminCard } from '../Components/AdminCard'
import { AddCourseDialog } from '../Components/ModuleDialog'
import { addModules } from '../../store/modules/modules/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../store'
import { IModulesState } from '../../store/modules/modules/types'

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$grey700',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
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

const Button = styled('button', {
  width: 40,
  height: 40,

  fontSize: '2rem',
  color: '#006600',

  // border: '1px solid white',
  borderRadius: '$full',
  marginRight: '$32',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',

  '&:hover': {
    cursor: 'pointer',
    transition: 'all 0.5s',
    transform: 'scale(1.1)',
    color: 'white',
    background: '#006600',
  }
})

export function Admin() {
  const state = useSelector<IState, IModulesState>(state => state.modules)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentClasses, setCurrentClasses] = useState([])
  
  useEffect(() => {
    const getModules = async () => {
      const { status, data } = await getAllModulesByAdmin()
      if (status === 200) {
        dispatch(addModules(data))
      } else {
        window.alert('Parece que você não tem permissão para acessar este recurso')
        return navigate('/modules')
      }
    }
    getModules()
  }, [])

  const getClassesFromModule = async (name: string) => {
    const { status, data: { classes } } = await getClassesByModule(name)
    if (status === 200) {
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
            state.modules &&
            state.modules.map(({ name, id }) => (
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
          <AddCourseDialog />
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