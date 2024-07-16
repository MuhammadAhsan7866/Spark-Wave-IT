import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

const BlogPage = () => {
  return (
    <Box position="relative" textAlign="center" color="white" w="100%">
      <Image
        src="/blogbanner.png"
        alt="Banner Image"
        objectFit="cover"
        width="100%"
        height={{ base: "300px", md: "400px", lg: "100vh" }}
        borderRadius="md"
       
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-end"
        p={{ base: "20px", md: "40px", lg: "50px" }}
        borderRadius="md"
        bg="rgba(0, 0, 0, 0.5)"
      >
        <Heading
          as="h1"
          fontSize={{ base: "24px", md: "32px", lg: "40px" }}
          fontWeight="500"
          lineHeight={{ base: "32px", md: "40px", lg: "48px" }}
          fontFamily="Space Grotesk"
          mb={4}
          textAlign="left"
          maxW="90%"
        >
          How to Make a Live-Streaming Website: Features, Tech Stack, and Estimate
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="400"
          lineHeight={{ base: "24px", md: "30px" }}
          fontFamily="Inter"
          mb={6}
          maxW="90%"
          textAlign="left"
        >
          As technology continues to advance, more people are becoming tech-savvy, and live streaming is rapidly becoming a mainstream way of sharing experiences with a global audience.
        </Text>
        <Button
          bg="#F4F8F8"
          colorScheme="teal"
          borderRadius="100px"
          p={{ base: "10px 16px", md: "12px 20px" }}
          color="black"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default BlogPage;
