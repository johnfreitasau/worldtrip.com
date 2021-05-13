import { Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      // h="20"
      // mx="auto"
      pt="7"
      // px="6"
      justifyContent="center"
      // alignItems="center"
      backgroundColor="white"
    >
      <img src="/images/logo.svg" alt="WorldTrip" />
    </Flex>
  );
}
