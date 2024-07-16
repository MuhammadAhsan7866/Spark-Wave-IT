// components/CaseStudies.js
import { Box, Grid, Image, Heading } from "@chakra-ui/react";

const CaseStudies = () => {
  return (
    <Box p={'100px'} >
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Related Case Studies
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        
      >
        <Box>
          <Image
            src="case1.png"
            alt="Case Study 1"
           
            objectFit="cover"
            w="full"
          
          />
        </Box>
        <Box>
          <Image
            src="case2.png"
            alt="Case Study 2"
           
            objectFit="cover"
            w="full"
          
          />
        </Box>
        <Box>
          <Image
            src="/case3.png"
            alt="Case Study 3"
          
            objectFit="cover"
            w="full"
          
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default CaseStudies;
