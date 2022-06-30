import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface IContainerProps {
    menuIsOpen?: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    color: ${props => props.theme.colors.title};

    background-color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.colors.tertiary};

    position: relative;

    @media (max-width: 767px) {
        padding-left: 3px;
        position: fixed;

        z-index: 2;

        transition: transform 0.3s;

        ${props => props.menuIsOpen && css`
            transform: translatex(-50px);
            height: 100vh;
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.label};
        `};
        
        ${props => !props.menuIsOpen && css`
            height: 100vh;
            transform: translatex(-255px);
        `};
    }
`;

export const Header = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 75px;
    }
`;

export const Content = styled.div`
    color: ${props => props.theme.colors.title};
    margin: 50px 0 0 10px;
`;

export const Ul = styled.ul`
    list-style: none;
   
`;

export const Li = styled.li`
    color: ${props => props.theme.colors.letter};

`;

export const LinkItem = styled(Link)`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:hover {
        opacity: .7;
    }

    > svg {
        width: 25px;
        height: 25px;
        color: ${props => props.theme.colors.letter};  
        margin: 0 10px;
    }
`;

export const ToggleMenu = styled.button<IContainerProps>`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;

    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.letter};

    opacity: .7;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }

    @media (max-width: 767px) {
        ${props => props.menuIsOpen && css`
        transform: translate(250px, -6px);
        `};
        ${props => !props.menuIsOpen && css`
            transition: transform 0.5s;
            transform: translate(250px, -6px);
        `};
    }

    @media (min-width: 768px) {
        display: none;
        visibility: hidden;
    }
`;