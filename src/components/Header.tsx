import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      padding="4"
      justifyContent="center"
      backgroundColor="white"
    >
      <Image src="/images/logo.svg" alt="WorldTrip" marginY="1.688" />
    </Flex>
  );
}
