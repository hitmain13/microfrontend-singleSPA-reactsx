import React from 'react';

import { Container, P } from './styles'

type MessageBoxProps = {
    message: string
    size?: string
}

const MessageBox: React.FC<MessageBoxProps> = ({message, size}) => (
    <Container>
        <P size={size}>
            {message}
        </P>
    </Container>
)

export default MessageBox