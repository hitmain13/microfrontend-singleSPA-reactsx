import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;

    display: inline-flex;

    justify-content: center;

    overflow-y: auto;

    background-color: ${props => props.theme.colors.quartiary};
    color: ${props => props.theme.colors.letter};
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;