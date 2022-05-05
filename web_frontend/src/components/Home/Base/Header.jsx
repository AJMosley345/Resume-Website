import React from 'react';
import Title from './Title';
import NavBar from './NavBar';
import { Container } from '@mui/material';

function Header() {
    return (
        <Container>
            <Title />
            <NavBar />
        </Container>
    );
}
export default Header