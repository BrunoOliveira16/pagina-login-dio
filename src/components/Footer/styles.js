import styled from 'styled-components';

export const FooterContainer = styled.footer `
    width: 100%;
    padding: 2rem 1rem;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(13, 18, 40);
`

export const Container = styled.div `
    Width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const Nav = styled.nav `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Column = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem 2rem;
`

export const Title = styled.h2 `
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem
    color: #FFFFFF;
` 

export const List = styled.ul `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const ListItem = styled.li `
    margin: 0.5rem 0;
    display: list-item;
    opacity: 0.75;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        opacity: 1;
    }
`

export const MobileContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    width: 100%;
    max-width: 400px;
`

export const TitleMobile = styled.h2 `
margin: 0.6em 0px;
font-size: 2rem;
font-weight: bold;
color: #FFFFFF;
text-align: center;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Link = styled.a `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 11rem;
    padding: 0.5rem;
    margin: 1rem;
    border-radius: 2.5rem;
    background-color: rgb(255, 255, 255);
    color: rgb(30, 25, 44);
    transition: color 0.2s ease-in-out 0s;
    text-decoration: none;

    svg {
        margin: 0.5rem;
        width: 2rem;
        height: 2rem;
    }
`

export const Baixar = styled.span `
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    color: rgb(30, 25, 44);

    span {
        font-size: 1rem;
        font-weight: 500;
    }
`

export const ContainerSocial = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    padding-top: 4rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`

export const SocialList = styled.ul `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 2rem 0;
    padding: 0;
    width: 100%;
`

export const LinkItems = styled.a `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    opacity: 0.75;
    color: #fff;
`