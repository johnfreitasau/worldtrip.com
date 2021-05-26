import { Header } from "../../components/Header";
import Router from "next/router";

import { ContinentProps } from "../../models";
import { GetStaticProps } from "next";
import { apiResolver } from "next/dist/next-server/server/api-utils";

export default function Continent(props: ContinentProps) {
  console.log("CONTINENT:", props);

  return (
    <>
      xxx
      <h1>{props.name}</h1>
      <h1>{props.id}</h1>
      <h1>{props.countries}</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const continent = await api.get('/continent')
};
