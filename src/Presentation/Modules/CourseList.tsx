import { styled } from '../../styles'

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

const Card = styled('div', {
  width: 350,
  height: 350,
  border: '1px solid yellow',
  color: '$text',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
      <Title>Course List</Title>
      <Box>
        <Card>
          Teste
          <Button>
            Acessar a trilha
          </Button>
        </Card>
        <Card>
          Teste
          <Button>
            Acessar a trilha
          </Button>
        </Card>
        <Card>
          Teste
          <Button>
            Acessar a trilha
          </Button>
        </Card>
        <Card>
          Teste
          <Button>
            Acessar a trilha
          </Button>
        </Card>
        <Card>
          Teste
          <Button>
            Acessar a trilha
          </Button>
        </Card>
      </Box>
    </Container>
  )
}