import { Box, Button, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import SignUpSchema from '../schemas';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const attributes = [
    {
      name : 'username',
      type : 'text',
      placeholder : 'Enter Username',
      label : 'Enter Username'
    },
    {
      name : 'email',
      type : 'email',
      placeholder : 'Enter Email',
      label : 'Enter Email'
    },
    {
      name : 'password',
      type : 'password',
      placeholder : 'Enter Password',
      label : 'Enter Username'
    },
    {
      name : 'confirmPassword',
      type : 'password',
      placeholder : 'Confirm Password',
      label : 'Confirm Password'
    }
];
  const initialValues = {
    username : '',
    email : '',
    password : '',
    confirmPassword : ''
  }

  const navigate = useNavigate();
  const {values,errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : SignUpSchema,
    onSubmit : (values)=>{
      console.log(values);
      navigate('/');
    }
});


  return (
    <VStack w='100%' h='100vh' justifyContent='center'>
      <VStack w='80%' p='50px' shadow='2xl' borderRadius='30px' bgColor='aliceblue'>
        <Heading>Register Now</Heading>
        <Text mt='15px' color='gray'>Please enter the following details to register</Text>
        <form onSubmit={handleSubmit}>
          <VStack mt='30px'>

            {attributes.map((data)=>{

              return(
                <Box key={data.name} w='400px'>
                <Input id={data.name} {...data} onChange={handleChange} onBlur={handleBlur} value={values[data.name]}/>
                {errors[data.name] && touched[data.name] ? <span className='errorMessage'>{errors[data.name]}</span> : null}
                </Box>
              )
            })}

            <Button colorScheme='blue' p='25px 50px' mt='20px' type='submit'>Register Now</Button>
          </VStack>
        </form>
      </VStack>
    </VStack>
  )
}

export default Register
