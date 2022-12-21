import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      w="full"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          minW="350px"
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={14}
          paddingY={16}
        >
          <Stack align={"center"} mb={8}>
            <Heading fontSize={"4xl"}>
              Acesse ao painel:<br/>
              <Text as={"span"} color={"green.400"} fontSize="2xl">
                Organize seus convites
              </Text>
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                mt={8}
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                color={"white"}
              >
                Acessar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
