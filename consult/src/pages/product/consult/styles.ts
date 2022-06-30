import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin: 10px;

    overflow-x: auto;
    @media (max-width: 767px) {
        margin: 10px 0;
    }
`;

export const Table = styled.table`
    border: 1px solid #cecece;
    width: 98%;
    margin: 10px;

    border-radius: 5px;
    padding: 15px 20px;

    overflow: auto;
    
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.black};  
    @media (max-width: 767px) {
        font-size: 12px;
        margin: 3px;
        padding: 5px 5px;
    }
    @media (max-width: 1279px) {
        font-size: 12px;
        margin: 3px;
        padding: 5px 5px;
    }
`;
export const Thead = styled.thead`
    
`;
export const Tr = styled.tr`
    border: 1px solid #cecece;

`;
export const Th = styled.th`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    
    padding: 5px;
    color: ${props => props.theme.colors.title};
    font-size: 1.2em;
    text-shadow: 0px 1px 1px rgb(0,0,0,0.1);
`;
export const Tbody = styled.tbody`
    border: 1px solid #cecece;

`;
export const Td = styled.td`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    color: ${props => props.theme.colors.label};
    text-align: center;

    padding: 3px 5px;
    min-width: 100px;
    border: none;
`;

export const TdButton = styled.td`
    width: 10px;
`;


export const Button = styled.button`
    background-color: ${props => props.theme.colors.background};
    border-radius: 5px;
    margin: 0 20px;

    flex-direction: column;
    justify-content: center;

    width: 25px;
    height: 25px;
    > svg {
        width: 30px;
        height: 30px;
        
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    text-align: center;
    
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 3px 3px;
    min-width: 100px;


    > button {
        color: ${props => props.theme.colors.details};
    }
    > button[name="remove"] {
        color: ${props => props.theme.colors.decline};
    }
    > button:hover {
        opacity: .7;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    width: 40%;
`;