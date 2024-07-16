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

const Ideas = () => {
  return (
    <>
      <Box
        pt={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
        pb={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
        px={{ base: "30px", md: "30px", sm: "30px", lg: "90px", xl: "90px" }}
        backgroundImage="url('/Aboutlyer.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Container maxW={"1440px"} mx={"auto"} p={"0px"}>
          <Flex
            justifyContent={"space-between"}
            // mt={{ lg: "52px", md: "40px", sm: "30px", base: "20px" }}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box
              width={{ xl: "50%", lg: "50%", base: "100%" }}
              // pr={{ lg: "0px", md: "0px", base: "0px" }}
            >
              <Heading
                fontSize={{
                  base: "30px",
                  sm: "30px",
                  md: "40px",
                  lg: "45px",
                  xxl: "55px",
                }}
                lineHeight={{
                  base: "36px",
                  sm: "36px",
                  md: "50px",
                  lg: "55px",
                  xxl: "70px",
                }}
                fontWeight={"700"}
                maxW={"650px"}
                fontFamily={"Space Grotesk"}
              >
                We offer brilliant ideas, transforming your brand into a
                success.
              </Heading>
            </Box>
            <Box
              width={{ xl: "45%", lg: "50%", base: "100%" }}
              mt={{ md: "40px", sm: "40px", base: "25px" }}
            >
              <Text
                fontSize={{ xl: "16px", lg: "20px", base: "16px" }}
                lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                fontWeight={"500"}
                mb={"15px"}
                color={"#7B7A7A"}
                fontFamily={"inter"}
              >
                Spark Wave Digital Marketing Solutions offers brilliant ideas to
                transform your brand into a success. Our team excels in
                WordPress custom theme development, plugin integration,
                performance optimization, Go High Level marketing automation,
                Squarespace elegant design, and comprehensive SEO services. We
                provide cutting-edge solutions to elevate your brand's online
                presence and achieve your business goals.
              </Text>
              <Flex
                gap={"30px"}
                mt={"40px"}
                flexDirection={{ base: "column", sm: "column", md: "row" }}
              >
                <Button
                  fontSize={{ md: "14px", sm: "13px", base: "14px" }}
                  lineHeight={"18px"}
                  fontWeight={"400"}
                  color={"white"}
                  colorScheme="black"
                  bg={"black"}
                  letterSpacing={"0.02em"}
                  textTransform={"uppercase"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "flex-start",
                  }}
                  _hover={{ textDecoration: "none", opacity: "0.8" }}
                  gap={"13px"}
                  py={"11px"}
                  px={"24px"}
                  borderRadius={"58px"}
                  w={{ base: "100%", sm: "100%", md: "auto" }}
                >
                  <Image src="sms.svg" alt="icon" />
                  Get in touch
                </Button>
                <Button
                  fontSize={{ md: "14px", sm: "13px", base: "14px" }}
                  lineHeight={"18px"}
                  fontWeight={"400"}
                  color={"#1A1A1A"}
                  colorScheme="transparent"
                  bg={"transparent"}
                  letterSpacing={"0.02em"}
                  textTransform={"uppercase"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "flex-start",
                  }}
                  _hover={{
                    textDecoration: "none",
                    opacity: "0.8",
                    bg: "black",
                    color: "white",
                  }}
                  gap={"13px"}
                  py={"11px"}
                  px={"24px"}
                  borderRadius={"58px"}
                  border={"1px solid #E4E4E4"}
                  w={{ base: "100%", sm: "100%", md: "auto" }}
                >
                  <Image src="gift.svg" alt="icon" />
                  More Services
                </Button>
              </Flex>
            </Box>
          </Flex>
          <Flex w={"100%"} mt={"100px"} justifyContent={"center"}>
            <Img src="/groupimg.png" w={"100%"}></Img>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Ideas;
