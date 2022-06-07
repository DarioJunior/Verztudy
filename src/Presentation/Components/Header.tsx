import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IState } from '../../store'
import { ILoginState } from '../../store/modules/login/types'
import { styled } from '../../styles'

const Container = styled('header', {
  width: '100%',
  minHeight: 100,
  backgroundColor: '$darkViolet',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $16'
})

const Title = styled('h1', {
  color: '$grey200'
})

const Nav = styled('nav', {
  width: 350,
  height: 50,

  color: '$text',

  display: 'flex',
  alignItems: 'center',

  'a': {
    marginLeft: '$8',
    color: '$text',
    textDecoration: 'none',

    '&:hover': {
      borderBottom: '1px solid white',
      transform: 'scale(1.3)',
      transition: 'all 0.2s ease-in'
    },
  }
})

export function Header() {
  const state = useSelector<IState, ILoginState>(state => state.login)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  useEffect(() => {
    const localStorageRole: string = localStorage.getItem('role') || ''
    const role = JSON.parse(localStorageRole)
    if (role === 'admin') {
      setIsAdmin(true)
    }
  }, [])

  return (
    <Container>
      <Title>Verztudy.</Title>
      <Nav>
        <Link to="/modules">
          Home
        </Link>
        { isAdmin && <Link to="/admin">Admin</Link>}
      </Nav>
    </Container>
  )
}