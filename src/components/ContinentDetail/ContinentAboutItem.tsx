import { ReactElement } from "react";
import { VStack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
interface ContinentAboutItemProps {
  number: number;
  label: string;
  icon?: ReactElement;
}

export function ContinentAboutItem({
  number,
  label,
  icon,
}: ContinentAboutItemProps) {
  return (
    <VStack spacing={-2} fontWeight="semibold">
      <Text fontSize="5xl" color="yellow.500">
        {number}
      </Text>
      <Text fontSize="2xl">
        {label} {!!icon && icon}
      </Text>
    </VStack>
  );
}
