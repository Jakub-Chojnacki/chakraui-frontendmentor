import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Flex,Image,SimpleGrid } from '@chakra-ui/react'
const ProductTabs = () => {
  return (
    <Flex direction="column" gap={6}>
     <Tabs>
        <TabPanels>
            <TabPanel>
               <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-1.jpg"/>
            </TabPanel>
            <TabPanel>
               <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-2.jpg"/>
            </TabPanel>
            <TabPanel>
             <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-3.jpg"/>
            </TabPanel>
            <TabPanel>
               <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-4.jpg"/>
              </TabPanel>
           </TabPanels>

        <TabList>
           <Tab>
               <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-1-thumbnail.jpg"/>
           </Tab>
           <Tab>
              <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-2-thumbnail.jpg"/>
           </Tab>
           <Tab>
              <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-3-thumbnail.jpg"/>
            </Tab>
            <Tab>
              <Image  borderRadius={{md:'6px'}} src="../images/products/image-product-4-thumbnail.jpg"/>
            </Tab>
         </TabList>  
      </Tabs>
     </Flex>
  )
}

export default ProductTabs