import { styled } from '../../styles'

export function Card({ children }: any) {
  const Container = styled('div', {
    width: 350,
    height: 350,
    color: '$text',
    backgroundColor: '$grey800',
    borderRadius: '$default',
    border: '2px solid $lightViolet',

    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'all 0.5s',
      boxShadow: '0px 5px 10px rgba(200, 50, 200, 0.5)',
    },
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })

  return (
    <Container>
      {children}
    </Container>
  )
}