import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      bgGradient="linear(to-br, teal.400, blue.600)"
      minH="100vh"
      textAlign="center"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6}>
        <Heading size="2xl" fontWeight="extrabold">
          Welcome to CodeEditor
        </Heading>
        <Text fontSize="lg" maxW="lg">
          Create, edit, and collaborate on code directly in your browser with ease.
        </Text>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={() => navigate("/editor")}
          shadow="lg"
          _hover={{ transform: "scale(1.05)" }}
        >
          Get Started
        </Button>
      </VStack>
    </MotionBox>
  );
};

export default LandingPage;
