import { Text, Flex, SimpleGrid, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ContinentProps } from "../../models";
import { ContinentAboutItem } from "./ContinentAboutItem";
import { Cities } from "./Cities";

export function ContinentDetail({ continent }: ContinentProps) {
  return (
    <Flex
      as="section"
      direction="column"
      w="100%"
      maxW={1160}
      marginLeft="auto"
      marginRight="auto"
      paddingX="4"
    >
      <SimpleGrid columns={[1, null, 2]} spacing="20" pt="20">
        <Flex w="100%" maxW="600px" align="strech">
          <Text fontSize="2xl" color="gray.500">
            {continent.about}
          </Text>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          <ContinentAboutItem number={continent.countries} label="countries" />
          <ContinentAboutItem number={continent.languages} label="languages" />
          <ContinentAboutItem
            number={continent.cities100}
            label="Cities"
            icon={
              <Tooltip
                hasArrow
                label="The cities that are among the 100 most visited cities in the world."
                size="md"
              >
                <InfoOutlineIcon w={4} h={4} color="gray.400" />
              </Tooltip>
            }
          />
        </Flex>
      </SimpleGrid>
      <Cities continent={continent} />
    </Flex>
  );
}
