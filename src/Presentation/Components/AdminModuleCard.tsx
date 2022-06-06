import { useState } from 'react'
import { styled } from '../../styles'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { deleteModule, getAllModulesByAdmin, updateModuleName } from '../../services/api'
import { useDispatch } from 'react-redux'
import { addModules } from '../../store/modules/modules/actions'

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



export function AdminModuleCard({ children, onClickFunction, name }: any) {  
  const dispatch = useDispatch()
  const [isReadOnly, setIsReadOnly] = useState(true)
  let originalModuleName = children
  const [inputValue, setInputValue] = useState(children)

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const actualizeModuleList = async () => {
    const { data } = await getAllModulesByAdmin()
    dispatch(addModules(data))
  }

  const handleSetReadOnly = () => {
    setIsReadOnly(!isReadOnly)
  }

  const handleDelete = async () => {
    const result = await deleteModule(name)
    actualizeModuleList()
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