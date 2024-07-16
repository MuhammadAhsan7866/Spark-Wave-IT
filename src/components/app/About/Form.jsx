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

const Form = () => {
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
    <Box w={{base:'100%',sm:'100%',md:'100%',lg:'100%',xxl:'80%',xxxl:'80%'}}>
      <Text
        fontSize={"32px"}
        lineHeight={"32px"}
        fontWeight={"700"}
        fontFamily={"Space Grotesk"}
        mb={"25px"}
        
      >
        Contact Details
      </Text>
      <form onSubmit={handleSubmit}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
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
        >
          <Image src="sms.svg" alt="icon" />
          Submit Request
        </Button>
      </form>
    </Box>
  );
};

export default Form;
