import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Team from "./MembersPic";
import ContactForm from "../BrainLandingPage/ContactForm";
import Form from "./Form";

const ContactUs = () => {
  return (
    <>
      <Box>
        <Box
          pt={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
          pb={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
          px={{ base: "30px", md: "30px", sm: "30px", lg: "90px", xl: "90px" }}
          backgroundImage="url(/Testimonial-Form-lyer.svg)"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Container maxW={"1580px"} mx={"auto"} p="0px">
            <Flex
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              flexWrap={"wrap"}
              gap={{
                base: "45px",
                sm: "45px",
                md: "45px",
                xxl: "0px",
                xxxl: "0px",
              }}
            >
              <Box width={{ xl: "70%", lg: "70%", base: "100%" }}>
                <Heading
                  fontSize={{
                    base: "50px",
                    sm: "55px",
                    md: "70px",
                    lg: "70px",
                    xxl: "90px",
                    xxxl: "90px",
                  }}
                  fontFamily={"Space Grotesk"}
                  lineHeight={{
                    base: "65px",
                    sm: "65px",
                    md: "70px",
                    lg: "70px",
                    xxl: "108px",
                    xxxl: "108px",
                  }}
                  fontWeight={"700"}
                  maxW={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xxl: "60%",
                    xxxl: "60%",
                  }}
                  mb={"35px"}
                >
                  Lets get something started.
                </Heading>
                <Box
                  maxW={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "1240px",
                    xl: "1240px",
                    xxl: "1240px",
                    xxxl: "1440px",
                  }}
                >
                  <Form />
                </Box>
              </Box>
              <Box width={{ xl: "30%", lg: "30%", base: "100%" }}>
                <Flex flexDirection={"column"} gap={"30px"}>
                  <Box
                    p={"30px"}
                    border={"1px solid #E4E4E4"}
                    borderRadius={"15px"}
                  >
                    <Flex gap={"20px"} mb={"25px"}>
                      <Img src="/contactimg.png"></Img>
                      <Img src="/girl.png"></Img>
                    </Flex>
                    <Heading
                      fontFamily={"Space Grotesk"}
                      lineHeight={"37px"}
                      fontSize={"32px"}
                      fontWeight={"700"}
                      mb={"15px"}
                    >
                      Would you like to speak to us directly?
                    </Heading>
                    <Text
                      fontFamily={"Inter"}
                      fontSize={"16px"}
                      fontWeight={"400"}
                      lineHeight={"30px"}
                      color={"#7B7A7A"}
                      mb={"17px"}
                    >
                      Simply by email or telephone? <br></br> No problem, we are
                      ready when you are!
                    </Text>
                    <Flex flexDirection={"column"} gap={"18px"}>
                      <Button
                        bg={"black"}
                        py={"12px"}
                        px={"20px"}
                        borderRadius={"100px"}
                        w={"45%"}
                        color={"white"}
                        _hover={{ bg: "#363535" }}
                      >
                        0309-4045-083
                      </Button>
                      <Button
                        bg={"black"}
                        py={"12px"}
                        px={"20px"}
                        borderRadius={"100px"}
                        color={"white"}
                        w={"60%"}
                        _hover={{ bg: "#363535" }}
                      >
                        ceobraintree@gmail.com
                      </Button>
                    </Flex>
                  </Box>
                  <Box
                    p={"30px"}
                    border={"1px solid #E4E4E4"}
                    borderRadius={"15px"}
                  >
                    <Heading
                      fontFamily={"Space Grotesk"}
                      lineHeight={"37px"}
                      fontSize={"32px"}
                      fontWeight={"700"}
                      mb={"30px"}
                    >
                      Our Location
                    </Heading>
                    <Box>
                      <Box borderBottom={"1px solid #E4E4E4"} pb={"17px"}>
                        <Heading
                          fontFamily={"Space Grotesk"}
                          lineHeight={"37px"}
                          fontSize={"32px"}
                          fontWeight={"700"}
                          mb={"15px"}
                        >
                          London
                        </Heading>
                        <Text
                          fontFamily={"Inter"}
                          fontSize={"16px"}
                          fontWeight={"400"}
                          lineHeight={"30px"}
                          color={"#7B7A7A"}
                        >
                          301 Sondanella, Eden walk, Orchard view, London, UK
                        </Text>
                      </Box>
                      <Flex mt={'20px'}>
                        <Text as="span" fontWeight="bold" mr={'8px'}>
                          E
                        </Text>
                        <Text as="span" color="gray.500">
                          :info@yourdomain.com
                        </Text>
                        
                      </Flex>
                      <Flex mt={'20px'}>
                        <Text as="span" fontWeight="bold" mr={'8px'}>
                          E
                        </Text>
                        <Text as="span" color="gray.500">
                          :12345678910
                        </Text>
                        
                      </Flex>
                      <Box mt={'80px'}>
                      <Box borderBottom={"1px solid #E4E4E4"} pb={"17px"} >
                        <Heading
                          fontFamily={"Space Grotesk"}
                          lineHeight={"37px"}
                          fontSize={"32px"}
                          fontWeight={"700"}
                          mb={"15px"}
                        >
                          London
                        </Heading>
                        <Text
                          fontFamily={"Inter"}
                          fontSize={"16px"}
                          fontWeight={"400"}
                          lineHeight={"30px"}
                          color={"#7B7A7A"}
                        >
                          301 Sondanella, Eden walk, Orchard view, London, UK
                        </Text>
                      </Box>
                      <Flex mt={'20px'}>
                        <Text as="span" fontWeight="bold" mr={'8px'}>
                          E
                        </Text>
                        <Text as="span" color="gray.500">
                          :info@yourdomain.com
                        </Text>
                        
                      </Flex>
                      <Flex mt={'20px'}>
                        <Text as="span" fontWeight="bold" mr={'8px'}>
                          E
                        </Text>
                        <Text as="span" color="gray.500">
                          :12345678910
                        </Text>
                        
                      </Flex>
                      </Box>
                     
                    </Box>
                  </Box>
                  
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box>
          <Img src="/map.png" w={"100%"}></Img>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
