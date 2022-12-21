import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      bgColor="blackAlpha.800"
      justifyContent="center"
      alignItems="center"
    >
      <Outlet />
    </Flex>
  );
};

export default AuthLayout;
