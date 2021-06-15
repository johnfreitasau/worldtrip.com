import { ContinentProps } from "../../models";
import { GetStaticPaths, GetStaticProps } from "next";
import { Flex, Heading } from "@chakra-ui/react";

import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { ContinentDetail } from "../../components/ContinentDetail";

export default function Continent({ continent }: ContinentProps) {
  console.log("CONTINENT:", continent);

  return (
    <>
      <Header isContinent />
      <Flex
        as="section"
        // h="500px"
        // w="100%"
        bgImage={`url(${continent.bannerImage})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity="0.8"
      >
        <Flex
          w="100%"
          h="500px"
          maxW={1160}
          mx="auto"
          justify="left"
          align="flex-end"
          padding="20"
        >
          <Heading
            position="absolute"
            color="gray.50"
            fontWeight="semibold"
            fontSize="5xl"
            // mb="4rem"
          >
            {continent.name}
          </Heading>
        </Flex>
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

  console.log("continent:", continent);

  return {
    props: {
      continent,
    },
  };
};
