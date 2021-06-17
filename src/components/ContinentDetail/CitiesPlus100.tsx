import {
  VStack,
  Heading,
  Box,
  Image,
  Badge,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";
import { ContinentProps } from "../../models";
import { CityCard } from "./CityCard";

export function CitiesPlus100({ continent }: ContinentProps) {
  console.log("CONTINENT:", continent);

  return (
    <Box pt="20" pb="8">
      <Heading fontWeight="medium" fontSize="4xl" pb="10">
        Cities + 100
      </Heading>
      <VStack as="section">
        <SimpleGrid columns={[1, 2, 4]} spacing={10} width="full">
          {/* <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard /> */}
          {continent?.cities?.map((city) => (
            <Box maxW="320px" borderRadius="md" shadow="lg">
              <Image roundedTop="md" src={city.image} />

              <Flex justifyContent="space-around">
                <Box padding="6">
                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                    color="gray.500"
                  >
                    {city.name}
                  </Text>

                  <Text color="gray.400" mt={2}>
                    {city.country}
                  </Text>
                </Box>
                <CircleFlag countryCode={`${city.code}`} width="30" />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
