import {
  VStack,
  Heading,
  Box,
  Image,
  Badge,
  Text,
  Flex,
} from "@chakra-ui/react";

import { CircleFlag } from "react-circle-flags";

export function CityCard() {
  return (
    <Box maxW="320px" borderRadius="md" shadow="lg">
      <Image roundedTop="md" src="https://bit.ly/2k1H1t6" />

      <Flex justifyContent="space-around">
        <Box padding="6">
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            London
            <Badge colorScheme="blue">NEW</Badge>
          </Text>

          <Text mt={2}>United Kingdom</Text>
        </Box>

        <CircleFlag countryCode="gb" width="30" />
      </Flex>
    </Box>
  );
}
