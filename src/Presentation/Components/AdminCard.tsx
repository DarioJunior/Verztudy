import { useState } from 'react'
import { styled, css } from '../../styles'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { deleteModule, updateModuleName } from '../../services/api'

const Container = styled('input', {
  width: 350,
  height: 80,
  color: '$text',
  backgroundColor: '$grey800',
  borderRadius: '$default',
  border: '2px solid $lightViolet',
  padding: '$16',

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
    transition: 'all 0.5s',
  },

  '&:read-only': {
    border: '1px solid blue',
  },

  '&:read-write': {
    border: '1px solid red',
  },

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

const Box = styled('div', {
  display: 'flex',

  '&:hover': {
    cursor: 'pointer',
  }
})



export function AdminCard({ children, onClickFunction, name, css }: any) {  
  const [isReadOnly, setIsReadOnly] = useState(true)
  let originalModuleName = children
  const [inputValue, setInputValue] = useState(children)

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSetReadOnly = () => {
    setIsReadOnly(!isReadOnly)
  }

  const handleDelete = async () => {
    console.log('click')
    const result = await deleteModule(name)
    console.log(result)
  }

  const handleSaveChanges = async () => {
    const newModuleName = inputValue
    originalModuleName = newModuleName
    setIsReadOnly(true)
    await updateModuleName(originalModuleName, newModuleName)
  }

  const IconEdit = () => {
    return (
      <Box>
        <FiEdit onClick={ handleSetReadOnly }/>
      </Box>
    )
  }

  const IconDelete = () => {
    return (
      <Box>
        <MdDeleteOutline onClick={ handleDelete }/>
      </Box>
    )
  }
  return (
    <>
      <Container
        type='text'
        value={inputValue}
        onChange={handleChange}
        // @ts-ignore
        onClick={!!isReadOnly && (() => onClickFunction(name))}
        readOnly={isReadOnly}
        onBlur={ handleSaveChanges }
        css={{border: '1px solid red'}}
      />
      <Box css={{ padding: '8px', color: 'white', fontSize: '24px'}}>
        <IconEdit />
        <IconDelete />
      </Box>
    </>
  )
}