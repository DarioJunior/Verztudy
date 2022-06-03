import { styled } from '../../styles'
import playButton from '../../assets/play-button.svg'

export function ClassRow({ nameClass }: any) {
  const Container = styled('div', {
    width: '95%',
    height: 70,
    color: '$text',
    backgroundColor: '$grey800',
    borderRadius: '$default',
    border: '2px solid $lightViolet',
    padding: '$16',
    margin: '$4',
    gap: '$16',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.03)',
      transition: 'all 0.2s',
      boxShadow: '0px 5px 5px rgba(200, 50, 200, 0.5)',
    },
  })

  const paragraph = styled('p', {
    fontSize: '$16',
  })

  const PlayButton = styled('img', {
    height: 40,
  })

  return (
    <Container>
      <PlayButton src={playButton} alt="" />
      <p>
        {nameClass}
      </p>      
    </Container>
  )
}