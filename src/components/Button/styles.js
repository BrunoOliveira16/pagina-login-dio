import styled, { css } from "styled-components";

export const ButtonContainer = styled.button `
    background: #565656;
    border: 0;
    border-radius: 1.25rem;
    position: relative;
    color: #FFFFFF;
    padding: 4px 12px;
    min-width: 120px;
    text-transform: uppercase;
    &:hover {
        opacity: .8;
        cursor: pointer;
    }

    ${({variant}) => variant !== "primary" && css `
        width: 80%;
        min-width: 167px;
        height: 2rem;
        background: #E4105D;
        transition: .3s;
        margin-top: 1rem;

        &:hover {
            opacity: .8;
            cursor: pointer;
        }

        &::after {
            content: "";
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 1.25rem;
        }
    `}
`