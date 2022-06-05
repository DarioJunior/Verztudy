import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllModules } from '../../services/api'
import { IState } from '../../store'
import { addModules } from '../../store/modules/modules/actions'
import { IModulesState } from '../../store/modules/modules/types'
import { styled } from '../../styles'
import { Card } from '../Components/Card'

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  overflow: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Box = styled('div', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
  alignItems: 'center',
  justifyContent: 'center',
})

const Title = styled('h1', {
  color: '$grey200',
  padding: '$16',
  textAlign: 'center',
})

const Paragraph = styled('p', {
  color: '$grey200',
  padding: '$16'
})

const Button = styled('button', {
  width: 200,
  minHeight: 50,
  color: '$text',

  border: '1px solid $lightViolet',
  borderRadius: '$default',
  backgroundColor: '$darkViolet',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$midViolet',
  }
})

export function CourseList() {
  const state = useSelector<IState, IModulesState>(state => state.modules)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getModules = async () => {
      const { status, data } = await getAllModules()

      if (status === 200) {
        dispatch(addModules(data))
      }
    }
    getModules()
  }, [])

  interface TargetType extends EventTarget {
    name: string
  }

  interface CustomButtonProps extends React.MouseEvent<HTMLButtonElement>, EventTarget {
    target: TargetType
  }

  const handleRedirect = (event: CustomButtonProps ) => {
    const { target } = event
    const { name } = target
    return navigate(`${name.toLowerCase()}`)
  }


  return (
    <Container>
      <Title>Módulos</Title>
      <Box>
       { 
        state.modules && state.modules.map((module: any) => (
          <Card key={module.id}>
            <Title>{module.name}</Title>
            <Paragraph>{'Aulas disponíveis:' + module.classes.length }</Paragraph>
            <Button type="button" name={module.name} onClick={handleRedirect}>Acessar Trilha</Button>
          </Card>
       ))}
      </Box>
    </Container>
  )
}