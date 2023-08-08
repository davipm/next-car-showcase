import { CarsProps, FilterProps } from "@/@types";

export async function fetchCars(filters: FilterProps): Promise<CarsProps[]> {
  const { manufacturer, year, fuel, model, limit } = filters;
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    },
  );

  return await response.json();
}
