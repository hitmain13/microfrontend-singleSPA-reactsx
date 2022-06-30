import React from 'react'
import { Container } from './styles'

type IContentProps = {
    children?: React.ReactNode;
}
const Content: React.FC<IContentProps> = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Content;