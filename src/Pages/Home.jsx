import { Box, Button, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import LoginSchema from '../schemas/LoginSchema';

const Home = () => {


  const attributes = [
    {
      name : 'username',
      type : 'text',
      placeholder : 'Enter Username'
    },
    {
      name : 'password',
      type : 'password',
      placeholder : 'Enter Password'
    },
    
  ];

    const initialValues = {
      username : '',
      password : ''
    }
    const navigate = useNavigate();
    const {values, errors, handleBlur, handleSubmit, handleChange, touched} = useFormik({
      initialValues : initialValues,
      validationSchema : LoginSchema,
      onSubmit : (values)=>{
        console.log(values.username);
        navigate('/login', {state : {username : values.username}});
      }

    })
  return (
    <VStack w='100%' h='100vh' justifyContent='center'>
      <VStack shadow='2xl' p='50px' borderRadius='30px' bgColor='aliceblue'>
        
        <Heading>Welcome</Heading>
        
        <Text mt={5} mb={10} color='gray'>Please enter the following details</Text>
        
        <VStack>
          
          
          <form style={{width : '300px'}} onSubmit={handleSubmit}>
            <VStack>
              {attributes.map((attr)=>{
                return(
                  <Box key={attr.name} w='100%'>
                    <Input id={attr.name} {...attr} onChange={handleChange} onBlur={handleBlur} 
                    value={values[attr.name]}/>
                    {errors[attr.name] && touched[attr.name] ? <span className='errorMessage'>{errors[attr.name]}</span> : null}
                  </Box>
                )
              })}  
            </VStack>
            <HStack spacing={5} mt={5}>

              <Button colorScheme='blue' px={12} py={3} type='submit'>
                Login
              </Button>
          
              <Button colorScheme='blue' type='button' px={12} py={3} onClick={()=>{navigate('/register')}}>
                Register
              </Button>

          </HStack>
          </form>          
          
          </VStack>
      </VStack> 
    </VStack>
  )
}

export default Home
