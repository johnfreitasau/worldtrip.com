import { ContinentProps } from "../../models";
import { GetStaticPaths, GetStaticProps } from "next";
import { Flex, Heading } from "@chakra-ui/react";

import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { ContinentDetail } from "../../components/ContinentDetail";

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header isContinent />
      <Flex
        bgImage={`url(${continent.bannerImage})`}
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          position="absolute"
          color="gray.50"
          fontWeight="semibold"
          fontSize="5xl"
        >
          {continent.name}
        </Heading>
      </Flex>

      <ContinentDetail continent={continent} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continent = await api
    .get(`/continents/${slug}`)
    .then((response) => response.data);

  return {
    props: {
      continent,
    },
  };
};
