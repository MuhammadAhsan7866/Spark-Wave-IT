import React from "react";
import {
  Flex,
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Img,
  Image,
} from "@chakra-ui/react";

const LeftSection = () => {
  return (
    <Box flex="1" p="4">
      <Heading
        mb="4"
        fontSize={{ base: "32px", sm: "32px", md: "38px" }}
        fontWeight={"700"}
        lineHeight={{ base: "38px", sm: "38px", md: "45px" }}
        maxW={"401px"}
        fontFamily={"Space Grotesk"}
      >
        Comprehensive Technology Solutions
      </Heading>
      <Text
        mb="4"
        fontSize={"16px"}
        lineHeight={"30px"}
        fontWeight={"400"}
        maxW={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xxl: "501px",
          xxxl: "100%",
        }}
      >
        At Spark Wave Agency, we specialize in comprehensive web development
        services tailored to elevate your online presence. Our expertise spans
        custom WordPress themes, plugin integration, and performance
        optimization. We excel in designing responsive, user-friendly websites
        using Elementor Pro, Divi, and WP Bakery. Our services also include SEO
        optimization, website migration, and security enhancements. Partner with
        Spark Wave Agency to transform your website into a powerful tool for
        your business growth and success.
      </Text>
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
        justifyContent={{ base: "center", sm: "center", md: "flex-start" }}
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
    </Box>
  );
};

const RightSection = () => {
  const cardsData = [
    {
      title: "Front-End",
      content:
        "We boast a skilled, innovative frontend team proficient in cutting-edge technology.",
    },
    {
      title: "Back-End",
      content:
        "Simplify Back-End Development with our expert support, ensuring your website's full functionality.",
    },
    {
      title: "JavaScript",
      content:
        "Our experts leverage Java for responsive, optimized, and fast-loading pages.",
    },
    {
      title: "Database",
      content:
        "We boast experienced developers who select the perfect database backbone for your application.",
    },
    {
      title: "Server",
      content:
        "Maximize app performance with our server maintenance. We handle errors and manage logs.",
    },
    {
      title: "Mobile Technology",
      content:
        "We specialize in iOS and Android app development, leveraging today's mobile-centric world.",
    },
  ];

  return (
    <Flex
      flex="2"
      flexWrap="wrap"
      justifyContent={"center"}
      mt={{ base: "24px", sm: "24px", md: "30px", lg: "0px" }}
    >
      {cardsData.map((card, index) => (
        <Box
          key={index}
          w={{
            base: "100%",
            sm: "100%",
            md: "326px",
            xxl: "375px",
            xxxl: "400px",
          }}
          borderRadius="12px"
          p="25px"
          mb="4"
          mx={"8px"}
          transition="box-shadow 0.2s"
          _hover={{
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          }}
          bg={"#F4F8F8"}
        >
          <Box borderBottom={"1px solid #E4E4E4"} pb="10px">
            <Heading
              fontSize={"24px"}
              mb="2"
              fontWeight={"700"}
              lineHeight={"30px"}
              color={"#1A1A1A"}
              fontFamily={"Space Grotesk"}
            >
              {card.title}
            </Heading>
            <Text
              fontSize={"16px"}
              lineHeight={"30px"}
              fontWeight={"400"}
              color={"#7B7A7A"}
            >
              {card.content}
            </Text>
          </Box>
          <Flex
            mt={"15px"}
            gap={{
              base: "10px",
              sm: "10px",
              md: "13px",
              xxl: "15px",
              xxxl: "22px",
            }}
          >
            <Img
              w={{ base: "51px", sm: "51px", md: "44px" }}
              src="/jquery.svg"
              alt="icons"
            />
            <Img
              w={{ base: "51px", sm: "51", md: "44px" }}
              src="/reactjs.svg"
              alt="icons"
            />
            <Img
              w={{ base: "51px", sm: "51px", md: "44px" }}
              src="/jquery.svg"
              alt="icons"
            />
            <Img
              w={{ base: "51px", sm: "51px", md: "44px" }}
              src="/jquery.svg"
              alt="icons"
            />
            <Img
              w={{ base: "51px", sm: "51px", md: "44px" }}
              src="/jquery.svg"
              alt="icons"
            />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

const TwoColumnLayout = () => {
  return (
    <Flex
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        xxl: "row",
        xxxl: "row",
      }}
    >
      <LeftSection />
      <RightSection />
    </Flex>
  );
};

export default TwoColumnLayout;
