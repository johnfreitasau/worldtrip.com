import {
  VStack,
  Heading,
  Box,
  Image,
  Badge,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { CircleFlag } from "react-circle-flags";
import { City } from "../../models";

export function CitiesCard({ name, country, code, image }: City) {
  return (
    <HStack justifyContent="center">
      <Box maxW="320px" borderRadius="md" shadow="lg" width="16rem">
        <Image roundedTop="md" src={image} />

        <Flex justifyContent="space-around">
          <Box padding="6">
            <Text
              mt={2}
              fontSize="xl"
              fontWeight="semibold"
              lineHeight="short"
              color="gray.500"
            >
              {name}
            </Text>

            <Text color="gray.400" mt={2}>
              {country}
            </Text>
          </Box>
          <CircleFlag countryCode={code} width="30" />
        </Flex>
      </Box>
    </HStack>
  );
}
