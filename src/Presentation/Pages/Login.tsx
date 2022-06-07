import { styled } from '../../styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import { InputText } from '../Components/InputText'
import { ChangeEvent, useEffect, useState } from 'react'
import { authenticateUser } from '../../services/api'
import { addUserInfos } from '../../store/modules/login/actions'

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  padding: '$24',
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

})

const Box = styled('div', {
  width: '30vw',
  height: '80vh',
  display: 'flex',
  borderRadius: '$default',

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

  transition: 'all 0.5s',

  '&:hover': {
    cursor: 'pointer',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$grey400',
    transform: 'opacity(0.5)',
  }
})

export function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [asError, setAsError] = useState<boolean>(false)
  
  const HandleInputChanges = (event: ChangeEvent<HTMLInputElement>) => {
    const { target }:any = event
    const { name } = target
    const { value } = target
    
    name === 'userEmail' && setUserEmail(value)
    name === 'userPassword' && setUserPassword(value)
  }

  useEffect(() => {
    if (userEmail.includes('@') && userPassword.length > 5) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [userEmail, userPassword])


  const handleLogin = async () => {
    const result: any = await authenticateUser({ userEmail, userPassword })

    if (!result) {
      setAsError(true)
      setTimeout(() => {
        setAsError(false)
      }, 2000)
    } else {
        dispatch(addUserInfos(result))
        return navigate('/modules')
    }
  }

  return (
    <Container>
      <Title>Verztudy.</Title>
      <Box display='centeredColumn'>
        <InputText
          inputName="userEmail"
          value={userEmail}
          onChangeValue={HandleInputChanges}
          isRequired={true}
        >
          <p>
            Digite seu email:
          </p>
        </InputText>
        
        <InputText
          inputName="userPassword"
          value={userPassword}
          onChangeValue={HandleInputChanges}
          isRequired={true}
        >
          <p>
            Digite sua senha:
          </p>
        </InputText>
        { asError && <p style={{ color: 'red'}}> Usuário ou senha inválida.</p>}
        <Button
          disabled={isDisabled}
          type="button"
          onClick={ handleLogin }
        >
          Entrar
        </Button>
      </Box>
    </Container>
  )
}