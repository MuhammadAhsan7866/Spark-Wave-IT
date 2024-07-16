// App.js
import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Img } from "@chakra-ui/react";
import BlogPage from "../../src/components/app/Blog/BlogPage";
import BlogCategory from "../../src/components/app/Blog/BlogCategory";

function Blog() {
  return (
    <Box w={"100%"}>
      <Container maxW="100%" p={"100px"}>
        <Flex justify="center" align="center" minH="100vh">
          <BlogPage />
        </Flex>
      </Container>
      <Container maxW="100%" px={"100px"} pb={"100px"}>
        <Flex>
          <BlogCategory />
        </Flex>
      </Container>
      <Box bg={"#0C1E21"} pos={'relative'}>
        <Container
          maxW={"1440px"}
          borderBottom={"1px solid #253538"}
         p={'200px'}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={"30px"}
          >
            <Heading
              fontSize={"90px"}
              lineHeight={"108px"}
              fontWeight={"700"}
              color={"white"}
              maxW={"700px"}
            >
              Lets make your Website shine.
            </Heading>
            <Button
              fontSize={{ md: "14px", sm: "13px", base: "14px" }}
              lineHeight={"18px"}
              fontWeight={"400"}
              color={"#1A1A1A"}
              colorScheme="transparent"
              bg={"white"}
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
              Get in touch
            </Button>
          </Flex>
        </Container>
        <Img pos={'absolute'} right={'0'} top={'0'} h={'100%'}  src="/shadow.svg"/>
        <Img pos={'absolute'} left={'0'} top={'0'} h={'100%'}  src="/shadow2.svg"/>
      </Box>
    </Box>
  );
}

export default Blog;
