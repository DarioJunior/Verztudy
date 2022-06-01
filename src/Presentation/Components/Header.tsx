import { styled, css } from '../../styles'

const Container = styled('header', {
  width: '100vw',
  height: 150,
  backgroundColor: '$midViolet',

  display: 'flex',
  alignItems: 'center',
})

const Title = styled('h1', {
  color: '$grey200'
})

export function Header() {
  return (
    <Container>
      <Title>Verztudy.</Title>
    </Container>
  )
}