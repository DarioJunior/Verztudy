import { styled, css } from '../../styles'

const Container = styled('header', {
  width: '100vw',
  height: 150,
  backgroundColor: '$midViolet',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $16'
})

const Title = styled('h1', {
  color: '$grey200'
})

const Nav = styled('nav', {
  width: 200,
  height: 50,

  display: 'flex',
  alignItems: 'center',

  border: '1px solid yellow'
})

export function Header() {
  return (
    <Container>
      <Title>Verztudy.</Title>
      <Nav>
        <a href="/home">Home</a>
        <a href="/admin">Admin</a>
      </Nav>
    </Container>
  )
}