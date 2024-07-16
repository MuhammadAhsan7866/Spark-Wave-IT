import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Team from "./MembersPic";

const ProfessionalShine = () => {
  return (
    <>
      <Box
        pt={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
        pb={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
        px={{ base: "30px", md: "30px", sm: "30px", lg: "0px", xl: "0px" }}
        bg={"#E4E4E4"}
      >
        <Container maxW={"1440px"} mx={"auto"}>
          <Flex
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
          
          >
            <Box
              width={{ xl: "40%", lg: "40%", base: "100%" }}
            >
              <Heading
                fontSize={{ base: "30px", sm: "30px", md: "40px" }}
                lineHeight={{ base: "32px", sm: "32px", md: "40px" }}
                fontWeight={"700"}
                maxW={"505px"}
                fontFamily={"Space Grotesk"}
                mb={{ base: "25px", sm: "25px", md: "25px" }}
              >
                We partner with brands to ensure their professional shine.
              </Heading>
            </Box>
            <Box
              width={{ xl: "60%", lg: "60%", base: "100%" }}
              mt={{ md: "40px", sm: "40px", base: "25px",lg:'30px',xxl:'0px',xxxl:'0px' }}
            >
              <Flex
                gap={{ base: "0px", sm: "0px", md: "20px" }}
                borderBottom={"1px solid #d1caca"}
                pb={"15px"}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xxl: "row",
                  xxxl: "row",
                }}
              >
                <Heading
                  fontSize={{ xl: "20px", lg: "20px", base: "16px" }}
                  lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                  fontWeight={"700"}
                  mb={"15px"}
                  color={"black"}
                  fontFamily={"Space Grotesk"}
                >
                  Successfully finished projects with creativity.
                </Heading>
                <Text
                  fontSize={{ xl: "16px", lg: "20px", base: "16px" }}
                  lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                  fontWeight={"500"}
                  mb={"15px"}
                  color={"#7B7A7A"}
                  maxW={"550px"}
                >
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
              </Flex>
              <Flex
                gap={{ base: "0px", sm: "0px", md: "20px" }}
                borderBottom={"1px solid #d1caca"}
                pb={"15px"}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xxl: "row",
                  xxxl: "row",
                }}
                pt={"20px"}
              >
                <Heading
                  fontSize={{ xl: "20px", lg: "20px", base: "16px" }}
                  lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                  fontWeight={"700"}
                  mb={"15px"}
                  color={"black"}
                  fontFamily={"Space Grotesk"}
                >
                  Successfully finished projects with creativity.
                </Heading>
                <Text
                  fontSize={{ xl: "16px", lg: "20px", base: "16px" }}
                  lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                  fontWeight={"500"}
                  mb={"15px"}
                  color={"#7B7A7A"}
                  maxW={"550px"}
                >
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
              </Flex>
              <Flex
                gap={{ base: "0px", sm: "0px", md: "20px" }}
                borderBottom={"1px solid #d1caca"}
                pb={"15px"}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xxl: "row",
                  xxxl: "row",
                }}
                pt={"20px"}
              >
                <Heading
                  fontSize={{ xl: "20px", lg: "20px", base: "16px" }}
                  lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                  fontWeight={"700"}
                  mb={"15px"}
                  color={"black"}
                  fontFamily={"Space Grotesk"}
                >
                  Successfully finished projects with creativity.
                </Heading>
                <Text
                  fontSize={{ xl: "16px", lg: "20px", base: "16px" }}
                  lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
                  fontWeight={"500"}
                  mb={"15px"}
                  color={"#7B7A7A"}
                  maxW={"550px"}
                >
                  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Container>
        <Box
          py={{
            base: "30px",
            sm: "30px",
            md: "40px",
            lg: "40px",
            xxl: "100px",
          }}
          px={{
            base: "0px",
            sm: "0px",
            md: "40px",
            lg: "40px",
            xxl: "100px",
          }}
        >
          <Team />
        </Box>
      </Box>
    </>
  );
};

export default ProfessionalShine;
