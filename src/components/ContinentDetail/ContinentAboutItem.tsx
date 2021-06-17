import { ReactElement } from "react";
import { VStack, Text } from "@chakra-ui/react";
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
      <Text fontSize={["sm", "md", "2xl"]}>
        {label} {!!icon && icon}
      </Text>
    </VStack>
  );
}
