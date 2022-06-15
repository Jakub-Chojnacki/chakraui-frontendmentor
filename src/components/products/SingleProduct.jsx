import React from 'react'
import { SimpleGrid,VStack,Flex,Image,Heading,Text,Box,Button} from '@chakra-ui/react'
const SingleProduct = () => {
  return (
    //product image(s)
    <Flex direction={['column','column','row']} align='center' gap={{md:'12',lg:'16'}} marginY={{md:'6'}}>
        <Flex direction="column" gap={6}>
            <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-1.jpg"/>
            <SimpleGrid  columns="4" spacing={6} display={['none','none','grid']}>
              <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-1-thumbnail.jpg"/>
              <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-2-thumbnail.jpg"/>
              <Image borderRadius={{md:'6px'}} src="../images/products/image-product-3-thumbnail.jpg"/>
              <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-4-thumbnail.jpg"/>
            </SimpleGrid>
        </Flex>
        <VStack  marginBottom={'6'} marginTop={['6','6','0']} align='left'>
           <Heading color='primary.orange' textTransform='uppercase' size='sm'>Sneaker Company</Heading>
           <Heading>Fall Limited Edition Sneakers</Heading>
           <Text paddingY={{md:'6'}} color='neutral.dark'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
          <Flex direction={{md:'column'}} justify='space-between' paddingBottom={8}>
            <Flex align='center' gap={6}>
              <Text fontSize='3xl' fontWeight='bold'>$125.00</Text>
              <Box py={1} px={3} borderRadius='4px' backgroundColor='primary.pale' color='primary.orange' fontWeight='bold'>50%</Box>
            </Flex>
            <Text fontWeight='bold' color='neutral.grayish' textDecoration='line-through'>$250.00</Text>
          </Flex>
          <SimpleGrid  columns={['1','1','2']} gap={['2','2','6']} >
            <Flex  borderRadius='4px' background='neutral.light' p={4} align='center' justify='space-between'>
              <Image cursor='pointer' src='../images/icons/icon-minus.svg'/>
              <Text>3</Text>
              <Image  cursor='pointer' src='../images/icons/icon-plus.svg'/>
            </Flex>
            <Button py={7} backgroundColor='primary.orange' color='white' gap={4}>
              <Image src='../images/icons/icon-cart--white.svg' color='white'/>
              Add to cart
              </Button>
          </SimpleGrid> 
        </VStack>
    </Flex>
    //product description
  )
}

export default SingleProduct