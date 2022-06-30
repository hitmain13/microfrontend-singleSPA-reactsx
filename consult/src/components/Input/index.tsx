import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    required?: boolean
    placeholder?: string
    color?: string
}

const Input: React.FC<InputProps> = ({
    name,
    label,
    required,
    placeholder,
    color,
    ...rest }) => (
    <Container color={color}>
        <label htmlFor={name}>
            <input
                id={name}
                name={name}
                required={required ? true : false}
                placeholder={placeholder}
                alt={name}
                {...rest}>
            </input>
            <span>
                {required ? placeholder + '*' : placeholder}
            </span>
        </label>
    </Container>
)

export default Input