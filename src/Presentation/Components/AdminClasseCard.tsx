import { useState } from 'react'
import { styled } from '../../styles'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { deleteClasse, getAllModulesByAdmin, getClassesByModule, updateClasseName } from '../../services/api'
import { useDispatch } from 'react-redux'
import { addClasses } from '../../store/modules/classes/actions'
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



export function AdminClasseCard({ children, onClickFunction, name, currentModuleName }: any) {  
  const dispatch = useDispatch()
  const [isReadOnly, setIsReadOnly] = useState(true)
  let originalClasseName = children
  const [inputValue, setInputValue] = useState(children)

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const actualizeClassList = async () => {
    const { data } = await getClassesByModule(currentModuleName)
    console.log(data)
    dispatch(addClasses(data))
    onClickFunction(currentModuleName)
  }

  const handleSetReadOnly = () => {
    setIsReadOnly(!isReadOnly)
  }

  const handleDelete = async () => {
    await deleteClasse(name)
    actualizeClassList()
  }

  const handleSaveChanges = async () => {
    const newClasseName = inputValue
    setIsReadOnly(true)
    console.log(originalClasseName, inputValue)
    await updateClasseName(originalClasseName, newClasseName)
    originalClasseName = newClasseName
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
        readOnly={isReadOnly}
        onBlur={ handleSaveChanges }
      />
      <Box css={{ padding: '8px', color: 'white', fontSize: '24px'}}>
        <IconEdit />
        <IconDelete />
      </Box>
    </>
  )
}