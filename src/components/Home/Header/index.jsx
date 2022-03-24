import React from 'react'
import { Button, HeaderComponent, Input, Link, Logo, Navbar, Search, SearchIcon } from './styled';

const Header = () => (

    <>
        
        <HeaderComponent>
            <Logo />
            <Navbar>
                <Link href="#"> Home </Link>
                <Link href="#"> Sobre </Link>
                <Link href="#"> Categorias </Link>
                <Link href="#"> Contato </Link>
            </Navbar>
            <Search>
                <Input placeholder="Buscar" />
                <Button> <SearchIcon/> </Button>
            </Search>
        </HeaderComponent>
    </>

)

export default Header;