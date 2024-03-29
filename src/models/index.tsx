export interface ContinentsProps {
  continents: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
  }[];
}

export interface ContinentProps {
  continent: {
    id: string;
    name: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    bannerImage: string;
    cities: City[];
  };
}

export type City = {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
};
