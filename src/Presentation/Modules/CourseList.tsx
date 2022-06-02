import { styled } from '../../styles'
import { Card } from '../Components/Card'

const Container = styled('div', {
  border: '1px solid red',
  width: '100vw',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Box = styled('div', {
  width: '100%',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  justifyContent: 'center',
})

const Title = styled('h1', {
  border: '1px solid yellow',
  color: '$grey200'
})

const Button = styled('button', {
  width: 200,
  height: 50,
  color: '$text',

  border: '1px solid $lightViolet',
  backgroundColor: '$darkViolet',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$midViolet',
  }
})

export function CourseList() {
  return (
    <Container>
      <Title>Módulos</Title>
      <Box>
        <Card>
          <h1>Título</h1>
          <p>
            Descrição do módulo
          </p>
          <Button>
            Acessar a trilha
          </Button>
        </Card>
        <Card>
          <h1>Título</h1>
          <p>
            Descrição do módulo
          </p>
          <Button>
            Acessar a trilha
          </Button>
        </Card>
        <Card>
          <h1>Título</h1>
          <p>
            Descrição do módulo
          </p>
          <Button>
            Acessar a trilha
          </Button>
        </Card>
        <Card>
          <h1>Título</h1>
          <p>
            Descrição do módulo
          </p>
          <Button>
            Acessar a trilha
          </Button>
        </Card>
      </Box>
    </Container>
  )
}