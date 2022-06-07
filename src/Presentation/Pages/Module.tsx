import { styled } from '../../styles'
import { Params, useParams } from 'react-router-dom'
import { Header } from '../Components/Header'
import { useEffect, useState } from 'react'
import { getClassesByModule } from '../../services/api'
import { ClassRow } from '../Components/ClassRow'

const Container = styled('div', {
  width: '100%',
  height: 'calc(100vh - 0px)',
})

const Box = styled('div', {
  width: '100%',
  height: 'calc(100% - 100px)',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
})

export function Module() {
  const { name }:Readonly<Params<string>> = useParams()
  const [classesList, setClassesList] = useState([])

  useEffect(() => {
    if (name) {
      const getClasses = async () => {
        const { status, data: { classes } } = await getClassesByModule(name)
        if (status === 200) {
          console.log(classes.sort())
          setClassesList(classes)
        }
      } 
      getClasses()
    }
  }, [])

  return (
    <Container>
      <Header />
        <Box>
          <Box
            css={{
              width: '50%',
              height: '100%',
              flexDirection: 'column',
            }}>
          {classesList && classesList.map(({ name, id }) => (<ClassRow key={id} nameClass={name} />))}
          </Box>
          <Box css={{ width: '50%', height: '100%', border: '1px solid pink'}}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DMEYKPOGlLk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Box>
      </Box>

      
    </Container>
  )
}