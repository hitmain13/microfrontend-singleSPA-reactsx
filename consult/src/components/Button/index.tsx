import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    label?: string
    color?: string
}

const Button: React.FC<ButtonProps> = ({ name, label, color, children }) => (
    <Container color={color}>
        <button
            name={name}
        >{children} {label}</button>
    </Container>
)

export default Button