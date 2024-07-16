import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box,
  Image,
  Text,
  Heading,
  Img,
} from "@chakra-ui/react";

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission, like sending the data to your backend server
    // For now, let's just display the form data in a toast message
    toast({
      title: "Form Submitted",
      description: JSON.stringify(formData, null, 2),
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset the form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        xxl: "row",
        xxxl: "row",
      }}
      gap={{ base: "30px", sm: "30px", md: "30px", lg: "40px" }}
    >
      <Box
        width={{ xl: "50%", lg: "50%", base: "100%" }}
        mt={{ md: "0px", sm: "40px", base: "25px" }}
      >
        <Flex gap={"8px"} alignItems="center" marginBottom={"25px"}>
          <Image src="/gradianrbar.svg" alt="img"></Image>
          <Text
            style={{
              background: `linear-gradient(to right, #E97522 0%, #1EA3B1 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "22px",
            }}
          >
            Get in Touch
          </Text>
        </Flex>
        <Heading
          fontFamily={"Space Grotesk"}
          as="h3"
          fontSize={{ xl: "48px", lg: "28px", base: "24px" }}
          lineHeight={{ xl: "52px", base: "36px" }}
          fontWeight={"700"}
          letterSpacing={"-2%"}
          mb={"20px"}
          color={"#1A1A1A"}
          maxW={"504px"}
          w={"100%"}
          textTransform={'capitalize'}
        >
          Have any project plans in your mind?
        </Heading>
        <Text
          fontSize={{ xl: "16px", lg: "20px", base: "16px" }}
          lineHeight={{ xl: "30px", lg: "30px", base: "26px" }}
          fontWeight={"500"}
          mb={"15px"}
          color={"#7B7A7A"}
          fontFamily={"raleway"}
        >
          Share your project visions and lets sculpt them into reality together.
          From concept to creation, lets shape the future one idea at a time.
        </Text>
        <Box mt={"30px"}>
          <Flex gap={"25px"}>
            <Img src="/rgbph.png" />
            <Box>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"17px"}
                color={"#7B7A7A"}
              >
                Mail Us 24/7
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"20px"}
                color={"black"}
              >
                ceosparkwave@gmail.com
              </Text>
            </Box>
          </Flex>
          <Flex gap={"25px"} mt={"24px"}>
            <Img src="/rgbmail.png" />
            <Box>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"17px"}
                color={"#7B7A7A"}
              >
                For Urgent Help
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"500"}
                lineHeight={"20px"}
                color={"black"}
              >
                +92 315 479 5801
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box>
        <form onSubmit={handleSubmit}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Flex direction="column" flex="1" mr={{ md: 4 }}>
              <FormControl>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"black"}
                >
                  First Name
                </FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"black"}
                >
                  Phone Number
                </FormLabel>
                <Input
                  bg={"white"}
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
            <Flex direction="column" flex="1" ml={{ md: 4 }}>
              <FormControl>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"black"}
                >
                  Last Name
                </FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"30px"}
                  color={"black"}
                >
                  Email Adress
                </FormLabel>
                <Input
                  bg={"white"}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
          </Flex>
          <FormControl mt={4}>
            <FormLabel
              fontSize={"16px"}
              fontWeight={"400"}
              lineHeight={"30px"}
              color={"black"}
            >
              How can we help you?
            </FormLabel>
            <Textarea
              bg={"white"}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
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
            justifyContent={"center"}
            _hover={{ textDecoration: "none", opacity: "0.8" }}
            gap={"13px"}
            py={"11px"}
            px={"24px"}
            borderRadius={"58px"}
            mt={"25px"}
            w={"100%"}
          >
            <Image src="sms.svg" alt="icon" />
            Get in touch
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
