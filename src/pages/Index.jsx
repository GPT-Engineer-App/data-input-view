import React, { useState } from "react";
import { Box, VStack, Input, Button, Text, Divider, useToast, Container, Heading } from "@chakra-ui/react";
import { FaPlus, FaEye } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({});
  const [dataToDisplay, setDataToDisplay] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataToDisplay(formData);
    toast({
      title: "Data Submitted",
      description: "The data has been submitted successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.sm" py={8}>
      <Heading mb={6}>Mobile Data Input App</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input placeholder="Enter some data..." name="inputData" value={formData.inputData || ""} onChange={handleChange} />
          <Button leftIcon={<FaPlus />} colorScheme="blue" type="submit">
            Submit Data
          </Button>
        </VStack>
      </Box>

      <Divider my={8} />

      <Box>
        <Heading size="md" mb={4}>
          View Results
        </Heading>
        {dataToDisplay.inputData ? (
          <Text>
            <FaEye /> {dataToDisplay.inputData}
          </Text>
        ) : (
          <Text color="gray.500">No data submitted yet.</Text>
        )}
      </Box>
    </Container>
  );
};

export default Index;
