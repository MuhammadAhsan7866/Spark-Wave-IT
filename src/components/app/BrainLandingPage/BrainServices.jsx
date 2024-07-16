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
import CardList from "./ServicesBrainCard";

const BrainTreeServices = () => {
  return (
    <>
      <Box>
        <Container m={'auto'} maxW={'100%'} p={"0"}>
        <Box
              maxW={"100%"}
              bg={"#F1F5F5"}
              position={"relative"}
              p={{ base: "30px", sm: "30px", md: "30px", lg: "100px" }}
             
            >
              <CardList />
            </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrainTreeServices;
