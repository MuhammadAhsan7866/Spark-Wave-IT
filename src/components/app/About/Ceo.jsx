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

const AboutCeo = () => {
  return (
    <>
      <Box
        //   pt={{base:'30px',md:'30px',sm:'30px',lg:'94px',xl:'94px'}}
        //   pb={{base:'30px',md:'30px',sm:'30px',lg:'94px',xl:'94px'}}
        px={{ base: "30px", md: "30px", sm: "30px", lg: "0px", xl: "0px" }}
        backgroundImage="url('/ceolyer.svg')"
        backgroundSize={"contain"}
        backgroundPosition={"bottom left"}
        backgroundRepeat={"no-repeat"}
        position={"relative"}
      >
        <Container maxW={"1352px"} mx={"auto"} p={"0px"}>
          <Flex
            justifyContent={"space-between"}
            //   mt={{ lg: "52px", md: "40px", sm: "30px", base: "20px" }}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box
              width={{ xl: "50%", lg: "50%", base: "100%" }}
              // pr={{ lg: "0px", md: "0px", base: "0px" }}
            >
              <Flex
                flexWrap={"wrap"}
                mx={"-8px"}
                justifyContent={{ base: "center", sm: "center", md: "center" }}
                alignItems={{ base: "center", sm: "center", md: "center" }}
              >
                <Img
                  src="/CEO.png"
                  zIndex={"9999"}
                  w={{
                    base: "85%",
                    sm: "85%",
                    md: "68%",
                    xxl: "100%",
                    xxxl: "70%",
                  }}
                  borderRadius={"16px"}
                />
              </Flex>
            </Box>
            <Box
              width={{ xl: "45%", lg: "50%", base: "100%" }}
              mt={{ md: "40px", sm: "40px", base: "25px" }}
            >
              <Heading
                fontFamily={"Space Grotesk"}
                as="h3"
                fontSize={{ xl: "45px", lg: "28px", base: "24px", md: "44px" }}
                lineHeight={{ xl: "52px", base: "36px", md: "53px" }}
                fontWeight={"700"}
                letterSpacing={"-2%"}
                mb={"20px"}
                color={"#1A1A1A"}
                maxW={{ base: "100%", sm: "100%", md: "100%" }}
                w={"100%"}
              >
                Muhammad Ahsan CEO of Spark Wave Agency
              </Heading>
              <Text
                fontSize={{ xl: "16px", lg: "20px", base: "16px" }}
                lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                fontWeight={"500"}
                mb={"15px"}
                color={"#7B7A7A"}
                fontFamily={"inter"}
              >
                As the CEO and Founder, he’s the driving force of our team. With
                a perfect mix of creativity and tech brilliance, he established
                Spark Web to deliver top-notch digital marketing solutions.
                Ahsan isn’t your typical CEO. He believes in making work
                enjoyable with teamwork, big dreams, and lots of high-fives. His
                innovative mindset keeps us ahead in the fast-paced digital
                world, turning every project into a digital masterpiece. But
                it’s not just about work for Ahsan; he’s dedicated to making a
                positive impact. Under his leadership, Spark Web isn’t just
                about hitting goals; it’s about contributing to the greater
                good. Muhammad Ahsan is a trendsetter, mentor, and the key to
                Spark Web’s success. With him at the helm, the future of digital
                innovation looks brighter than ever!
              </Text>
            </Box>
          </Flex>
        </Container>
        <Img
          src="/ceobg.svg"
          position={"absolute"}
          top={"101px"}
          left={"0"}
          width={{ base: "97%", sm: "97%", md: "92%", xxl: "50%", xxxl: "50%" }}
        ></Img>
      </Box>
    </>
  );
};

export default AboutCeo;
