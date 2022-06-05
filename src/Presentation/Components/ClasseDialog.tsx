import { styled } from '../../styles'
import { keyframes } from '@stitches/react';
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { ChangeEvent, useState } from 'react';
import { createModule, getAllModulesByAdmin } from '../../services/api';
import { addModules } from '../../store/modules/modules/actions';
import { useDispatch } from 'react-redux';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$grey800",
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$midViolet',
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: '$lightViolet',
  fontSize: 15,
  lineHeight: 1.5,
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

const Label = styled('label', {
  fontSize: 15,
  color: 'red',
  width: 120,
  textAlign: 'right',
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: 'black',
  boxShadow: `0 0 0 1px pink`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px purple` },
});

const Flex = styled('div', { display: 'flex' });

export const DialogModal = ({ children, ...props}: any) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  )
} 

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = DialogModal
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose = DialogPrimitive.Close

const Button = styled('button', {
  width: 120,
  height: 40,

  fontSize: '1.5rem',
  color: '$text',

  // border: '1px solid white',
  borderRadius: '$full',
  marginRight: '$32',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$darkViolet',

  '&:hover': {
    cursor: 'pointer',
    transition: 'all 0.5s',
    transform: 'scale(1.1)',
    color: 'white',
    background: '#006600',
  }
})

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$grey200',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { cursor: 'pointer', backgroundColor: '$grey800' },
  '&:focus': { boxShadow: `0 0 0 2px purple` },
});


export const AddCourseDialog = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('Exemplo')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInputValue(value)
  }

  const handleSaveModule = async () => {
    const response = await createModule(inputValue)

    if (response && response.status === 201) {
      console.log('XXXXXXXXXXXX')
    } else {
      window.alert('Algo deu errado! provavelmente este módulo já existe.')
    }
  }
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button type="button">
        <IoMdAddCircleOutline />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Adicionar Nova Aula:</DialogTitle>
      <DialogDescription>
        Preencha as informações com cuidado
      </DialogDescription>
      <Fieldset>
      <Label htmlFor="moduleName">Nome da aula:</Label>
        <Input id="moduleName" value={inputValue} onChange={handleInputChange} />
      </Fieldset>
      <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
        <Button aria-label="Close" onClick={ handleSaveModule }>
          Save
        </Button>
        <DialogClose asChild>
        <IconButton>
          <AiOutlineClose />
        </IconButton>
      </DialogClose>
      </Flex>
    </DialogContent>
  </Dialog>
  )
}
 