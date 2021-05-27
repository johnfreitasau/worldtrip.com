import { ContinentProps } from "../../models";
import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";

import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";

export default function Continent({ continent }: ContinentProps) {
  console.log("CONTINENT:", continent);

  return (
    <>
      <Header />
      <Banner />
      <section>
        <Flex direction="row" justifyContent="space-between">
          <Box>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Box>
          <Box>50 countries 60 languages 27 cities + 100</Box>
        </Flex>
      </section>
      <section>
        Cities + 100
        <Grid>
          <GridItem>London</GridItem>
          <GridItem>Paris</GridItem>
          <GridItem>Rome</GridItem>
          <GridItem>Prage</GridItem>
          <GridItem>Amsterdam</GridItem>
        </Grid>
      </section>
      <h1>{continent.name}</h1>
      <h1>{continent.id}</h1>
      <h1>{continent.countries}</h1>
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
