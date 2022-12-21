import { Flex, VStack, Text } from "@chakra-ui/react";

const App = () => {
  return(
    <Flex w="full" h="100vh" bgColor="blackAlpha.800" justifyContent="center" alignItems="center">
        <Text color="white" fontWeight="bold" fontSize="2xl"> Error | 404</Text>
    </Flex>
  );
}

export default App;