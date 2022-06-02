import { styled } from '../../styles'
import React, { ChangeEvent, InputHTMLAttributes } from 'react'

const Container = styled('div', {
  padding: '$8',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center'
})

const Label = styled('label', {
  color: '$text',
  fontSize: '1rem',

  span: {
    color: '$darkviolet'
  }
})

const Input = styled('input', {
  backgroundColor: '$grey700',
  border: '1px solid $grey500',
  height: '35px',
  width: '100%',
  color: '$text',
  fontSize: '1rem',
  margin: '$8 0',
  padding: '0 $16'
})

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  inputName: string
  isRequired?: boolean
  css?: { [key: string]: string }
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputText({
  children,
  inputName,
  onChangeValue,
  isRequired,
  css,
  ...rest
}: InputTextProps) {
  return (
    <Container>
      <Label htmlFor={inputName}>
        {children}
        <Input
          type="text"
          id={inputName}
          name={inputName}
          css={css}
          {...rest}
          onChange={onChangeValue}
          required={isRequired}
        />
      </Label>
    </Container>
  )
}
