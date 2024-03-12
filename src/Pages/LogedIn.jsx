import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const LogedIn = () => {
    const location = useLocation();
    console.log(location);
  return (
    <Flex w='100%' h='100vh' alignItems='center' justifyContent='center'>
      <Heading>Welcome {location.state.username}</Heading>
    </Flex>
  )
}

export default LogedIn;
