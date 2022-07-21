import React from 'react'
import React from 'react'
import { Link } from "react-router-dom"
import {
    Box,
    Button,
    Flex,
   Text,
   Center,
   CopyIcon,
  } from "@chakra-ui/react";

export const One = () => {
  return (
    <Box  w="100%">
<Flex w="90%" mx="auto"  justify="space-between">
            <Flex align="center" mb="20px">
                <Text fontSize="24px" color="#03064A" fontWeight="700">Test type: </Text>
                <span style={{
                    color: "#03064A",
                    fontSize: "20px",
                    fontWeight: "500",
                    }}
                > Python skill Test</span>
            </Flex>
           
            <Flex align="center" mb="20px">
                <Text fontSize="24px" color="#03064A" fontWeight="700">Test Duration: </Text>
                <span style={{
                    color: "#03064A",
                    fontSize: "20px",
                    fontWeight: "500",
                    }}
                > 1hr:60min</span>
            </Flex>
            <Flex align="center" mb="20px">
                <Text fontSize="24px" color="#03064A" fontWeight="700">Test question: </Text>
                <span style={{
                    color: "#03064A",
                    fontSize: "20px",
                    fontWeight: "500",
                    }}
                >05 questions 30/06/2022</span>
            </Flex>
            </Flex>
            <Box w="80%" mx="auto">
            <Text mb="20px" color="#03064A" opacity="0.6" fontsize="20px" fontWeight="700">Note: The minimum pass score for this test is 80%</Text>
            <Flex justify="space-between" flexWrap="wrap">
            <Box borderRadius="8px" h="250px" w='45%' mb="40px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"  flexDirection="column">
            <Flex m="20px 20px" rounded="10px" justify="space-between" p="10px" bg="rgba(3, 6, 74, 0.3)">
            <Text fontsize="34px" fontWeight="700"> Question 1</Text>
                            <Text fontsize="34px" fontWeight="700" color="#E91818"> Time: 24min</Text>
            </Flex> 
            <Text mt="30px" mx="20px" fontSize="24px" fontWeight="700">Implement a Hash Table using python?</Text>
            <Flex w="100%" justify="flex-end">
            <Button p="20px 30px" mr="20px" bg="#03064A"  color="#ffffff" fontSize="20px" fontWeight="600" borderRadius="47px" colorScheme="#03064A"
                            _hover={{
                            bg: "#03064A",
                            border: "1px solid primary",
                            opacity: "0.9",
                        }}
                        >
                             <Text>Solve</Text>
                    </Button>
            </Flex>
            </Box>
            <Box borderRadius="8px" h="250px" w='45%' mb="40px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"  flexDirection="column">
            <Flex m="20px 20px" rounded="10px" justify="space-between" p="10px" bg="rgba(3, 6, 74, 0.3)">
            <Text fontsize="34px" fontWeight="700"> Question 2</Text>
            <Text fontsize="34px" fontWeight="700" color="#E91818"> Time: 24min</Text>
            </Flex>
            <Text mt="30px" mx="20px" fontSize="24px" fontWeight="700">Implement a Hash Table using python?</Text>
            <Flex w="100%" justify="flex-end">
            <Button p="20px 30px" mr="20px"  bg="#03064A"  color="#ffffff" fontSize="20px" fontWeight="600" borderRadius="47px" colorScheme="#03064A"
                            _hover={{
                            bg: "#03064A",
                            border: "1px solid primary",
                            opacity: "0.9",
                        }}
                        >
                     <Text>Solve</Text>
                        </Button>
            </Flex>
            </Box>
            </Flex> 
            <Box borderRadius="8px" h="250px" w='45%' mb="40px" boxShadow="6px 4px 27px rgba(3, 6, 74, 0.25)"  flexDirection="column">
            <Flex m="20px 20px" rounded="10px" justify="space-between" p="10px" bg="rgba(3, 6, 74, 0.3)">
            <Text fontsize="34px" fontWeight="700"> Question 3</Text>
            <Text fontsize="34px" fontWeight="700" color="#E91818"> Time: 24min</Text>
            </Flex>
            <Text mt="30px" mx="20px" fontSize="24px" fontWeight="700">Implement a Hash Table using python?</Text>
            <Flex w="100%" justify="flex-end">
            <Button p="20px 30px" mr="20px" bg="#03064A"  color="#ffffff" fontSize="20px" fontWeight="600" borderRadius="47px" colorScheme="#03064A"
                            _hover={{
                            bg: "#03064A",
                            border: "1px solid primary",
                            opacity: "0.9",
                        }}
                        >
                        <Text >
                            Solve
                        </Text>
                        </Button>
            </Flex>
            </Box>
            
          
            <Flex w="100%"  justify="flex-end">
            <Button p="20px 30px" mr="20px"  bg="#03064A"  color="#ffffff" fontSize="20px" fontWeight="600" borderRadius="47px" colorScheme="#03064A"
                            _hover={{
                            bg: "#03064A",
                            border: "1px solid primary",
                            opacity: "0.9",
                        }}
                        >
                        <Link  to="/dashboard/two">
                            Next
                        </Link>
                        </Button>
            </Flex>
            
            <Box w="100%" >
            <Flex w="250px" justify="space-between"  m="50px auto">
            <Text w="60px" border="3px solid #03064A"></Text>
                    <Text w="60px" border="3px solid grey"></Text>
                    <Text w="60px" border="3px solid grey"></Text>
            </Flex>
            </Box>
    </Box>
            </Box>
            
           
   
  )
}
