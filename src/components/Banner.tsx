import { Image, Box, Text, Flex, VStack, Heading } from "@chakra-ui/react";

export function Banner() {
  return (
    // <Box>
    //   <Image
    //     src="/images/banner.svg"
    //     alt="background"
    //     position="relative"
    //     width="100%"
    //   />
    // </Box>
    <Flex
      as="section"
      w="100%"
      h="335px"
      bgGradient="linear(to-t, #072E4B, #01162B)"
      justify="space-around"
      align="center"
    >
      <VStack spacing={5} maxW={520} align="flex-start" color="grey.50">
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
      />
    </Flex>
  );
}
