import React from 'react'
import { Button, HeaderComponent, Input, Logo, Navbar, Search, SearchIcon } from './styled';

import { NavLink } from 'react-router-dom';

const links = [
    {name: "Home", to:"/"},
    {name: "Sobre", to:"/sobre"},
    {name: "Categorias", to:"/categorias"},
    {name: "Contato", to:"/contato"},
]

const Header = () => (

    <>
        
        <HeaderComponent>
            <Logo />
            <Navbar>
                {links.map( (link) => (
                    <NavLink className="navlink" key={link.name} to={`${link.to}`}>
                        {link.name}
                    </NavLink>
                ))}
                {/*<Link href="#"> Home </Link>
                <Link href="#"> Sobre </Link>
                <Link href="#"> Categorias </Link>
                <Link href="#"> Contato </Link>*/}
            </Navbar>
            <Search>
                <Input placeholder="Buscar" />
                <Button> <SearchIcon/> </Button>
            </Search>
        </HeaderComponent>
    </>

)

export default Header;