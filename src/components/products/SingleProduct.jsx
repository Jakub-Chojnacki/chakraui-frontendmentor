import React from 'react'
import { SimpleGrid,VStack,Flex,Image,Heading,Text,Box,Button} from '@chakra-ui/react'
const SingleProduct = () => {
  return (
    //product image(s)
    <SimpleGrid columns={1} spacing={10}>
        <Flex>
            <Image src="../images/products/image-product-1.jpg"/>
        </Flex>
        <VStack align='left'>
            <Heading color='primary.orange' textTransform='uppercase' size='sm'>Sneaker Company</Heading>
            <Heading>Fall Limited Edition Sneakers</Heading>
            <Text color='neutral.dark'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
        </VStack>
        <Flex direction={{md:'column'}} justify='space-between'>
          <Flex align='center' gap={6}>
            <Text fontSize='3xl' fontWeight='bold'>$125.00</Text>
            <Box py={1} px={3} borderRadius='4px' backgroundColor='primary.pale' color='primary.orange' fontWeight='bold'>50%</Box>
          </Flex>
          <Text fontWeight='bold' color='neutral.grayish' textDecoration='line-through'>$250.00</Text>
        </Flex>
        <Flex  borderRadius='4px' background='neutral.light' p={4} align='center' justify='space-between'>
          <Image src='../images/icons/icon-minus.svg'/>
          <Text>3</Text>
          <Image src='../images/icons/icon-plus.svg'/>
        </Flex>
        <Button py={7} backgroundColor='primary.orange' color='white' gap={4}>
          <Image src='../images/icons/icon-cart--white.svg' color='white'/>
          Add to cart
          </Button>
    </SimpleGrid>
    //product description
  )
}

export default SingleProduct