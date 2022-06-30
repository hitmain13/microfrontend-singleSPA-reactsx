import styled, {css} from 'styled-components'

interface IMessageProps {
    size?: string
}

export const Container = styled.div`
    position: relative;
    margin: 10px;
    bottom: -45px;
    padding: 10px;
    border-radius: 5px;
`;

export const P = styled.p<IMessageProps>`
    color: ${props => props.theme.colors.label};
    ${props => props.size && css`
        font-size: ${props.size};
    `};
    text-align: center;
`;