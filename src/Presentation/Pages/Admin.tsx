import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllModulesByAdmin, getClassesByModuleAsAdmin } from '../../services/api'
import { styled } from '../../styles'

import { Header } from '../Components/Header'
import { AddCourseDialog } from '../Components/ModuleDialog'
import { addModules } from '../../store/modules/modules/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../store'
import { IModulesState } from '../../store/modules/modules/types'
import { IClassesState } from '../../store/modules/classes/types'
import { addClasses } from '../../store/modules/classes/actions'
import { AdminClasseCard } from '../Components/AdminClasseCard'
import { AdminModuleCard } from '../Components/AdminModuleCard'
import { AddClasseDialog } from '../Components/ClasseDialog'

const Container = styled('div', {
  width: '100vw',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

const Box = styled('div', {
  width: '100%',

  display: 'flex'
})


export function Admin() {
  const modulesState = useSelector<IState, IModulesState>(state => state.modules)
  const classesState = useSelector<IState, IClassesState>(state => state.classes)
  const [currentModule, setCurrentModule] = useState<string>('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
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
    const { status, data } = await getClassesByModuleAsAdmin(name)
    if (status === 200) {
      dispatch(addClasses(data))
    }
  }
  return (
    <Container>
      <Header />
      <Box css={{}}>
        <Box css={{
          padding: '$32',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {
            modulesState.modules &&
            modulesState.modules.map(({ name, id }, index) => (
              <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '5px 0'
              }}>
                <AdminModuleCard 
                  key={id}
                  onClickFunction={ getClassesFromModule }
                  name={name}
                >
                  {name}
                </AdminModuleCard>
              </div>
            ))
          }
          <AddCourseDialog />
        </Box>
        <Box css={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {
            classesState.classes &&
            classesState.classes.map(({ name, id }) => (
              <AdminClasseCard
                key={id}
                name={name}
              >
                {name}
            </AdminClasseCard>
            ))
          }
          <AddClasseDialog />
        </Box>
      </Box>

    </Container>
  )
}