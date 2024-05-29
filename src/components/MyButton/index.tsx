import React from 'react'
import styled from '@emotion/styled'

interface MyButtonProps {
  variant: 'filled' | 'outlined'
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  styleContainer?: React.CSSProperties
}

const MyButton = React.memo(({ variant, children, onClick, type, styleContainer }: MyButtonProps) => {
  return (
    <Main
      onClick={onClick}
      type={type}
      style={styleContainer}
      className={`${variant === 'filled' ? 'filled' : 'outlined'}`}
    >
      {children}
    </Main>
  )
})

const Main = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;

  &.filled {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }

  &.outlined {
    background-color: transparent;
    color: #007bff;
    border-color: #007bff;
    &:hover {
      background-color: #007bff;
      color: white;
    }
  }
`

export default MyButton
