import { Image, Text, Flex, VStack, Heading } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      as="section"
      w="100%"
      h="335px"
      bgGradient="linear(to-t, #072E4B, #01162B)"
      justify="space-around"
      align="center"
      py="8.75rem"
    >
      <VStack
        spacing={5}
        maxW={520}
        align="flex-start"
        color="gray.50"
        px={["4", "10", "15", "20"]}
      >
        <Heading fontWeight="500">
          5 Continents,
          <Text>infinite possibilities.</Text>
        </Heading>
        <Text fontSize="1.25rem">
          It's time to take the trip you've always dreamed of out off paper.
        </Text>
      </VStack>

      <Image
        src="/images/airplane.svg"
        width="100"
        mt="7rem"
        transform="rotate(3deg)"
        display={["none", "none", "block"]}
      />
    </Flex>
  );
}
