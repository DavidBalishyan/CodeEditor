import React from "react";
import { Box, Text, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import CodeEditor from "../editor/CodeEditor";

const EditorPage = () => {
  return (
    <Box minH="100vh" bg="#1E1E1EFF" color="gray.500" px={6} py={8}>
      <CodeEditor />
    </Box>
  );
};

export default EditorPage;
