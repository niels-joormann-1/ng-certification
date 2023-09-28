import { Weather } from "./weatherinfo.model"

export type Forecast =
  {
    cnt: number;
    cod: string;
    message: number;
    list: Weather[];
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number
    }
  }
