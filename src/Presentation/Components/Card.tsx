import { styled, css } from '../../styles'

export function Card({ children, onClickFunction, name, css }: any) {
  const Container = styled('button', {
    width: 350,
    height: 250,
    color: '$text',
    backgroundColor: '$grey800',
    borderRadius: '$default',
    border: '2px solid $lightViolet',
    padding: '$16',

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
    <Container css={css} onClick={() => onClickFunction(name)}>
      {children}
    </Container>
  )
}