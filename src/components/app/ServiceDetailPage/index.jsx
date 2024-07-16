import React from "react";
import { Box, Text, Image, Img, Flex } from "@chakra-ui/react";
import InsightSection from "./InsideLook";
import ImageSlider from "./PortSlider";
import CaseStudies from "./CaseStudies";

function ServiceDetailPage() {
  return (
    <Box>
      <Box as="section">
        <Img w={"100%"} maxH={'100%'} src="/detailsbanner.png" />
      </Box>

      <Box as="section" bg="#F1F5F5" py="80px" px={'150px'} >
        <Box maxW={'900px'} margin={'auto'}>
        <Text fontSize="16px" color="#7B7A7A" fontWeight={'400'} lineHeight={'30px'} fontFamily={'Inter'}>
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </Text>
        <Text fontSize="16px" color="#7B7A7A" fontWeight={'400'} lineHeight={'30px'} fontFamily={'Inter'} mt={'45px'}>
        Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </Text>
        </Box>
        
      </Box>
      <Box width="100%" px={{ base: '10px', md: '20px', lg: '40px' }} py={{ base: '20px', md: '30px', lg: '50px' }}>
      <Flex direction={{ base: 'column', md: 'row' }} >
        <Img
          w={{ base: '100%', md: '50%' }}
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.1)' }}
          src="/caseimg.png"
        />
        <Img
          w={{ base: '100%', md: '50%' }}
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.1)' }}
          src="/caseimg2.png"
        />
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }}  >
        <Img
          w={{ base: '100%', md: '50%' }}
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.1)' }}
          src="/caseimg3.png"
        />
        <Img
          w={{ base: '100%', md: '50%' }}
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.1)' }}
          src="/caseimg4.png"
        />
      </Flex>
      <Box >
        <Img
          w="100%"
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.1)' }}
          src="/musiccar.png"
        />
      </Box>
    </Box>
      <Box>
        <InsightSection/>
      </Box>
      <Box mt={'-10%'} pb={'100px'}>
        <ImageSlider/>
      </Box>
      <Box>
        <CaseStudies/>
      </Box>
    </Box>
  );
}

export default ServiceDetailPage;
