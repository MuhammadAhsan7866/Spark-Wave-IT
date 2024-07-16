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

const Marketing = () => {
  return (
    <>
      <Box
        pt={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
        pb={{ base: "30px", md: "30px", sm: "30px", lg: "94px", xl: "94px" }}
        px={{ base: "30px", md: "30px", sm: "30px", lg: "0px", xl: "0px" }}
        bg={"#F1F5F5"}
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
              <Img src="/marekting.png" />
            </Box>
            <Box
              width={{ xl: "45%", lg: "50%", base: "100%" }}
              mt={{ md: "40px", sm: "40px", base: "25px" }}
            >
              <Heading
                fontFamily={"Space Grotesk"}
                fontSize={"45px"}
                fontWeight={"700"}
                lineHeight={"45px"}
                mb={'30px'}
                maxW={'487px'}
              >
                Website & Marketing Success
              </Heading>
              <Text
                fontFamily={"Inter"}
                fontSize={"16px"}
                fontWeight={"400"}
                lineHeight={"30px"}
                color={'#7B7A7A'}
                maxW={'487px'}
              >
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Marketing;
