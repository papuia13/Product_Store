import React from 'react'
import { CgAdd } from "react-icons/cg";
import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Container maxW="container.lg" px={4}>
    <Flex h={16} justify="space-between" align="center" flexDirection={{base:"column", sm:"row"}}>
        <Text fontSize={{base: 22, sm: 28}}
      fontWeight="bold"
      textTransform="uppercase"
      textAlign={{base: 'center', sm: 'left'}}
      bgGradient="linear(to-r, cyan.400, blue.500)"

        >
          <Link to={"/"}>Papuia Store 🪙</Link>
        </Text>
        <HStack spacing={2} alignItems="center">
        <Link to={"/create"}>
        <Button colorScheme="blue">
          <CgAdd fontSize={20}/>
        </Button>
        </Link>
        </HStack>
        
          
          
    </Flex>
  </Container> 
  )
}

export default NavBar