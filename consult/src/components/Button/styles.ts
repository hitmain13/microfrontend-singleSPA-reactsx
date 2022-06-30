import styled from 'styled-components'

type ButtonProps = {
    color?: string
}

export const Container = styled.div<ButtonProps>`
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    width: 100%;
    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        
        width: 100%;
        min-width: 70px;

        border-radius: 25px;
        font-size: 1.1em;

        padding: 10px;
        border: 2px solid #FFF;
        color: ${props => props.theme.colors.letter};
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        background-color: ${props => props.color ?
        props.color
        : props => props.theme.colors.title};

        transition: opacity 0.2s;

        > svg {
            width: 25px;
            height: 25px;
            margin-right: 15px;
        }
    &:hover {
        opacity: 0.7;
    }
    }
`;