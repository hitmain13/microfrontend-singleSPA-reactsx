import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.letter};
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
        margin-left: 35px;
    }
    
    > img {
        width: 40px;
        height: 40px;
        
        margin: 0 20px;
        cursor: pointer;
    }
`;

export const RightSide = styled.div`
    margin-right: 30px;
`;

export const CircularIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    border: 2px solid #FFF;
    background-color: ${props => props.theme.colors.title};

    width: 40px;
    height: 40px;

    cursor: pointer;

    > svg {
        color: #0007;
        width: 50%;
        height: 50%;
    }
`;