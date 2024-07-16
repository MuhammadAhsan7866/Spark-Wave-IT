import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Button,
  Img,
} from "@chakra-ui/react";
import React from "react";


const TrandImageUrl = [
  {
    imageUrl: "image/landing-page/trand-img1.png",
  },
  {
    imageUrl: "image/landing-page/trand-img2.png",
  },
  {
    imageUrl: "image/landing-page/trand-img3.png",
  },
  {
    imageUrl: "image/landing-page/trand-img4.png",
  },
];

const BrainTreeAbout = () => {
  return (
    <>
      <Box
        pt={{base:'30px',md:'30px',sm:'30px',lg:'94px',xl:'94px'}}
        pb={{base:'30px',md:'30px',sm:'30px',lg:'94px',xl:'94px'}}
        px={{base:'30px',md:'30px',sm:'30px',lg:'0px',xl:'0px'}}
        backgroundImage="url('/Aboutlyer.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Container maxW={"1352px"} mx={"auto"}>
          <Flex
            justifyContent={"space-between"}
            mt={{ lg: "52px", md: "40px", sm: "30px", base: "20px" }}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box
              width={{ xl: "50%", lg: "50%", base: "100%" }}
              // pr={{ lg: "0px", md: "0px", base: "0px" }}
            >
              <Flex flexWrap={"wrap"} mx={"-8px"} justifyContent={'center'}>
                <Img src="/gridimg.webp" />
              </Flex>
            </Box>
            <Box
              width={{ xl: "45%", lg: "50%", base: "100%" }}
              mt={{ md: "40px", sm: "40px", base: "25px" }}
            >
               <Flex gap={"8px"} alignItems="center" marginBottom={'25px'}>
                <Image src="/gradianrbar.svg" alt="img"></Image>
                <Text
                  style={{
                    background: `linear-gradient(to right, #E97522 0%, #1EA3B1 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "22px",
                  }}
                  fontFamily={'Space Grotesk'}
                  textTransform={'uppercase'}
                >
                 About Spark Wave Agency
                </Text>
              </Flex>
              <Heading
               fontFamily={'Space Grotesk'}
                as="h3"
                fontSize={{ xl: "45px", lg: "28px", base: "24px",md:'44px' }}
                lineHeight={{ xl: "52px", base: "36px",md:'53px'}}
                fontWeight={"700"}
                letterSpacing={"-2%"}
                mb={"20px"}
                color={"#1A1A1A"}
                maxW={'504px'}
                w={'100%'}
                
              >
                Top-notch software and web development
              </Heading>
              <Text
                fontSize={{ xl: "16px", lg: "20px", base: "16px" }}
                lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                fontWeight={"500"}
                mb={"15px"}
                color={"#7B7A7A"}
                fontFamily={"raleway"}
              >
                 Spark Wave Agency is a well-known and client-focused web Development
                Company giving their best for 10 years based in Canada. Our
                prime focus is to provide professional and mobile-friendly web
                developments and services. We are champions in designing
                E–e-commerce websites and providing SaaS applications that grow
                your business rapidly. Our services will take your business to
                another level.
              </Text>
              <Flex gap={'30px'} mt={'40px'}
              flexDirection={{base:'column',sm:'column',md:'row'}}
              >
              <Button
                fontSize={{ md: "14px", sm: "13px", base: "14px" }}
                lineHeight={"18px"}
                fontWeight={"400"}
                color={"white"}
                colorScheme="black"
                bg={'black'}
                letterSpacing={"0.02em"}
                textTransform={"uppercase"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={{base:'center',sm:'center',md:'flex-start'}}
                _hover={{ textDecoration: "none", opacity: "0.8" }}
                gap={'13px'}
                py={'11px'}
                px={'24px'}
                borderRadius={'58px'}
               w={{base:'100%',sm:'100%',md:'auto'}}
              >
                 <Image
                  src="sms.svg"
                  alt="icon"
                  
                />
                Get in touch
               
              </Button>
              <Button
                fontSize={{ md: "14px", sm: "13px", base: "14px" }}
                lineHeight={"18px"}
                fontWeight={"400"}
                color={"#1A1A1A"}
                colorScheme="transparent"
                bg={'transparent'}
                letterSpacing={"0.02em"}
                textTransform={"uppercase"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={{base:'center',sm:'center',md:'flex-start'}}
                _hover={{ textDecoration: "none", opacity: "0.8",bg:'black',color:'white' }}
                gap={'13px'}
                py={'11px'}
                px={'24px'}
                borderRadius={'58px'}
                border={'1px solid #E4E4E4'}
                w={{base:'100%',sm:'100%',md:'auto'}}
              >
                 <Image
                  src="gift.svg"
                  alt="icon"
                  
                />
                More Services
               
              </Button>
              </Flex>
              
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default BrainTreeAbout;
