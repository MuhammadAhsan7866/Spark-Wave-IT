// components/InsightSection.js
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import Marketing from "./MarketingSection";

const InsightSection = () => {
  return (
    <Box bg="#F1F5F5" pb={{ base: '50px', md: '100px', lg: '200px' }} pt={{ base: '50px', md: '90px', lg: '140px' }} px={{ base: '20px', md: '40px', lg: '150px' }}>
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Box w={{ base: '100%', lg: '70%' }} mb={{ base: '20px', lg: '0' }}>
          <Box>
            <Heading
              fontFamily="Space Grotesk"
              fontSize={{ base: '24px', md: '36px', lg: '45px' }}
              lineHeight={{ base: '30px', md: '40px', lg: '45px' }}
              fontWeight="700"
              mb="30px"
            >
              An Inside Look
            </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '30px', md: '130px' }}>
              <Box maxW="460px">
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={{ base: '20px', md: '28px', lg: '32px' }}
                  lineHeight={{ base: '25px', md: '35px', lg: '45px' }}
                  fontWeight="700"
                  mb="25px"
                >
                  The Goal
                </Heading>
                <Text
                  fontFamily="Inter"
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight="400"
                  lineHeight="30px"
                  color="#7B7A7A"
                >
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={{ base: '28px', md: '36px', lg: '45px' }}
                  lineHeight={{ base: '35px', md: '40px', lg: '45px' }}
                  fontWeight="700"
                >
                  350%
                </Heading>
                <Text
                  fontFamily="Space Grotesk"
                  fontSize={{ base: '18px', md: '20px', lg: '24px' }}
                  fontWeight="400"
                  lineHeight="45px"
                >
                  Increase in Website Traffic
                </Text>
              </Box>
            </Flex>
            <Flex direction={{ base: 'column-reverse', md: 'row' }} gap={{ base: '30px', md: '140px' }} mt="65px">
              <Box>
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={{ base: '28px', md: '36px', lg: '45px' }}
                  lineHeight={{ base: '35px', md: '40px', lg: '45px' }}
                  fontWeight="700"
                >
                  3X
                </Heading>
                <Text
                  fontFamily="Space Grotesk"
                  fontSize={{ base: '18px', md: '20px', lg: '24px' }}
                  fontWeight="400"
                  lineHeight="45px"
                >
                  Growth in eCommerce Sales
                </Text>
              </Box>
              <Box maxW="460px">
                <Heading
                  fontFamily="Space Grotesk"
                  fontSize={{ base: '20px', md: '28px', lg: '32px' }}
                  lineHeight={{ base: '25px', md: '35px', lg: '45px' }}
                  fontWeight="700"
                  mb="25px"
                >
                  The Goal
                </Heading>
                <Text
                  fontFamily="Inter"
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight="400"
                  lineHeight="30px"
                  color="#7B7A7A"
                >
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                  metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                  interdum tellus elit sed risus. Maecenas eget condimentum velit,
                  sit amet feugiat lectus.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: '100%', lg: '30%' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              src="/brangirls.png"
              alt="Sample"
              w={{ base: '100%', md: '80%', lg: '100%' }}
            />
          </Box>
        </Box>
      </Flex>
      <Box mt={{ base: '40px', lg: '60px' }}>
        <Marketing />
      </Box>
    </Box>
  );
};

export default InsightSection;
