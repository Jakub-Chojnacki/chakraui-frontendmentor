import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Flex,Image } from '@chakra-ui/react'
const ProductTabs = ({images,thumbnails}) => {
   const [tabIndex, setTabIndex] = React.useState(0)
   const handleTabsChange = (index) => {
      setTabIndex(index)
    }

   const handlePrevious = () => {
    if(tabIndex > 0){
       setTabIndex(prev => prev - 1)
    }else{
        setTabIndex(images.length - 1)
    }
   }
    
   const handleNext = () => {
   if(tabIndex < images.length - 1){
      setTabIndex(prev => prev + 1)
    }else{
     setTabIndex(0)
    }
   }

    const panels = images.map((panel)=> {
      return (
         <TabPanel>
            <Image onClick={handlePrevious} p={4} background="white"  borderRadius="50%" position="absolute" left="25" top="50%" src="../images/icons/icon-previous.svg"/>
            <Image  onClick={handleNext} p={4} background="white"  borderRadius="50%"  right="25" top="50%" position="absolute" src="../images/icons/icon-next.svg"/>
            <Image borderRadius={{md:'6px'}} src={panel}/>
         </TabPanel>
         )
    })

    const tabs = thumbnails.map((tab)=> {
      return (
         <Tab>
            <Image  borderRadius={{md:'6px'}} src={tab}/>
         </Tab>
      )
    })

  return (
    <Flex direction="column" gap={6} >
     <Tabs index={tabIndex} onChange={handleTabsChange}>
      <TabPanels position="relative">
       {panels}
      </TabPanels>
      <TabList display={['none','none','flex']}>
       {tabs}
      </TabList>  
    </Tabs>
   </Flex>
  )
}

export default ProductTabs