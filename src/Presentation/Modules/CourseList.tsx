import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllModules } from '../../services/api'
import { styled } from '../../styles'
import { Card } from '../Components/Card'

const Container = styled('div', {
  border: '1px solid red',
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
  const navigate = useNavigate()
  const param = useParams()

  const [modulesList, setModulesList] = useState([])
  useEffect(() => {
    const getModules = async () => {
      const { status, data } = await getAllModules()

      if (status === 200) {
        setModulesList(data)
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
        modulesList && modulesList.map((module: any) => (
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