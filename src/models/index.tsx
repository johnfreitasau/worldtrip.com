export interface ContinentsProps {
  continents: ContinentProps[];
}

export interface ContinentProps {
  id: string;
  name: string;
  call: string;
  callImage: string;
  bannerImage: string;
  about: string;
  countries: number;
  languages: number;
  cities100: number;
  cities: [
    {
      id: string;
      name: string;
      image: string;
      country: string;
      code: string;
    }
  ];
}
