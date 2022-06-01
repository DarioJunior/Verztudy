import { styled } from '../../styles'
import { useNavigate } from 'react-router-dom'

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

})

const Box = styled('div', {
  width: '80vw',
  height: '80vh',
  display: 'flex',

  variants: {
    display: {
      centeredColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },

  border: '2px solid $grey300',
  color: '$text'
})

const Title = styled('h1', {
  color: '$grey200'
})

const Button = styled('button', {
  width: 200,
  height: 45,

  color: '$text',
  backgroundColor: '$darkViolet',
  border: '2px solid $lightViolet',
  borderRadius: '$full',
})

export function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    return navigate('/home')
  }
  return (
    <Container>
      <Title>Verztudy.</Title>
      <Box display='centeredColumn'>
        <label htmlFor="email">
          Digite seu email:
          <input type="text" name="email" id="email" />
        </label>
        
        <label htmlFor="password">
          Digite sua senha:
          <input type="text" name="password" id="password" />
        </label>

        <Button
          type="button"
          onClick={ handleLogin }
        >
          Entrar
        </Button>
      </Box>
    </Container>
  )
}