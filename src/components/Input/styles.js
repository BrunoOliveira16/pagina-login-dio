import styled from 'styled-components';

export const InputContainer = styled.div `
    width: 100%;
    height: 2rem;
    border-bottom: 1px solid #383450;
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
`

export const IconContainer = styled.div `
    margin-right: .7rem;
    color: #8647AD;
`

export const InputText = styled.input `
    background-color: transparent;
    color: #FFFFFF;
    font-size: 1.1rem;
    font-weight: 400;
    width: 100%;
    border: 0;
    height: 2rem;

    &::placeholder {
        font-weight: 400;
        font-size: 1.1rem;
        color: #FFFFFF;
    }
`

export const ErrorText = styled.p `
    color: #FF0000;
    font-size: .8rem;
    margin: 5px 0;
`