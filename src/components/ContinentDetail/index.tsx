import {
  Text,
  HStack,
  Box,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ContinentProps } from "../../models";
import { ContinentAboutItem } from "./ContinentAboutItem";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CitiesPlus100 } from "./CitiesPlus100";

export function ContinentDetail({ continent }: ContinentProps) {
  return (
    <Flex
      as="section"
      direction="column"
      w="100%"
      maxW={1160}
      marginLeft="auto"
      marginRight="auto"
      paddingTop="20"
      paddingX="4"
    >
      <SimpleGrid columns={[1, null, 2]}>
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
            label="Cities + 100"
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
      <CitiesPlus100 continent={continent} />
    </Flex>
  );
}
