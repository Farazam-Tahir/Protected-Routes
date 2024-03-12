import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <HStack justifyContent='center' p='20px' bgColor='darkblue' color='white' gap={10}>
      {/* <Link to='/' >Home</Link> */}
      <Link to='/shop' >Shop</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/'>Login</Link>
      <Link to='/register'>Signup</Link>
    </HStack>
  )
}

export default Navbar
