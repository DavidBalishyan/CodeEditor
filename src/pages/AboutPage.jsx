import React from "react";
import { Box, Text, Heading, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";

const features = [
  { icon: FaCode, title: "Code Anywhere", desc: "Test your code on any device." },
  { icon: FaLaptopCode, title: "Vscode like", desc: "Our editor has integration of monaco-editor, wich gives you the vscode-like experience." },
  { icon: FaUsers, title: "Best for testing", desc: "The best and fastest way to test your code." },
];

const AboutPage = () => {
  return (
    <Box py={10} px={6} textAlign="center">
      <Heading mb={8}>About CodeEditor</Heading>
      <HStack spacing={10} justifyContent="center">
        {features.map((feature, idx) => (
          <VStack
            key={idx}
            spacing={4}
            p={6}
            bg="gray.50"
            shadow="md"
            borderRadius="lg"
            maxW="300px"
          >
            <Icon as={feature.icon} boxSize={10} color="teal.400" />
            <Text fontWeight="bold" color={"black"}>{feature.title}</Text>
            <Text fontSize="sm" color="gray.600">
              {feature.desc}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default AboutPage;
