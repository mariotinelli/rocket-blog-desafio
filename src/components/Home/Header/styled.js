import styled from 'styled-components'
import logo from "../../../images/logo.svg"
import searchIcon from '../../../images/search.svg'

export const HeaderComponent = styled.header`
    margin-bottom: 4rem;
    margin-inline: auto;
    width: 73.0713rem;
    height: 2.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img.attrs({src: logo})``;

export const Navbar = styled.nav`
    width: 21.75rem;
    height: 1.3125rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    & .navlink {
        color: var(--white);
        font-size: var(--font-2);
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        text-decoration: none;
        padding-left: 0.1875rem;
    }

    & .navlink.active {
        border-left: 3px solid var(--green);
    }
`;

export const Search = styled.div`
    display: flex;
    height: 100%;
`;

export const Input = styled.input`
    width: 14.375rem;
    padding-left: 1.6031rem;
    background-color: var(--dark-bg);
    border: none;

    &::placeholder {
        color: var(--light-purple);
        font-size: var(--font-1);
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
`;

export const Button = styled.button`
    width: 4.375rem;
    border: none;
    cursor: pointer;
    background-color: var(--button-bg);
`;

export const SearchIcon = styled.img.attrs({src: searchIcon})``;
