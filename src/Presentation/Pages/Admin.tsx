import { styled, css } from '../../styles'
import { Header } from '../Components/Header'
import { CourseList } from '../Modules/CourseList'

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
  return (
    <Container>
      <Header />
      <Box css={{

      }}>
        <Box css={{
          border: '1px solid yellow',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          MÓDULOS
        </Box>
        <Box css={{
          border: '1px solid yellow',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          AULAS
        </Box>
      </Box>

    </Container>
  )
}