import styled from 'styled-components'

type InputProps = {
    color: any
}

export const Container = styled.div<InputProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 30px;

    > label {
        position:relative;
        margin-left: 5px;
        height: 1px;
        
        > input {
            width:100%;
            padding:15px 10px;
            border-radius: 5px;
            transform: translateY(-1.2em);

            color: ${props => props.theme.colors.label};
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px;
            border-bottom: 2px solid ${props => props.color ? props.color : props.theme.colors.label};
            transition: opacity 0.2s;
            &::placeholder {
                opacity: 0;
            }
        }
        > span {
            padding-left: 12px;
            position:absolute;
            top:0;
            left:0;
            font-size:1em;
            color: ${props => props.theme.colors.label};
            transition-duration:200ms;
            cursor: text;
        }
        &:focus-within {
            > span {
                transform: translateY(-1.7em);
            }
        }
        input:not(:placeholder-shown) + span {
            color: ${props => props.color ? props.color : props.theme.colors.details};
            transform: translateY(-1.7em);
        }
    }
`;