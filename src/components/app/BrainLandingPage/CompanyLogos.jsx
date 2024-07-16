"use client";

import { Container, Stack, Flex, Box, Heading, Img } from "@chakra-ui/react";

export default function CompanyLogos( Bgcolor) {
  return (
    <Box bg={Bgcolor} py="40px" px={"40px"}>
      <Container maxW={"1240px"}>
        <Flex
          justifyContent={"space-between"}
          pb={"18px"}
          alignItems={"center"}
          gap={{  base: "30px", md: "45px" }}
          overflowX={{
            base: "scroll",
            md: "scroll",
            lg:'hidden'
          }} /* Adjusted overflowY property */
        >
          <Img src="/logo1.png" />
          <Img src="/logo2.png" />
          <Img src="/logo3.png" />
          <Img src="/logo4.png" />
          <Img src="/logo5.png" />
          <Img src="/logo6.png" />
        </Flex>
      </Container>
    </Box>
  );
}
