import React from 'react';
import { Container,Nav,Button, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <NavbarBS sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={ NavLink }>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={ NavLink }>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={ NavLink }>
                        About
                    </Nav.Link>
                </Nav>
                <Button 
                    onClick={openCart}
                    style={{width: '4rem' , height: '3rem'}} 
                    variant='outline-primary'>
                    Cart
                </Button>
                {
                    cartQuantity > 0 && (
                        <div 
                            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                            style={{width:'30px'}}>
                            { cartQuantity }
                        </div>
                    )
                }
            </Container>
        </NavbarBS>
  )
}
