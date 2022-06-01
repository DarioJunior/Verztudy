import { styled } from '../../styles'
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

const Title = styled('h1', {
  color: '$grey200'
})

export function Home() {
  return (
    <Container>
      <Header />
      <CourseList /> 
    </Container>
  )
}