import { CarsProps, FilterProps } from "@/@types";

export async function handleCarsApi(
  filters: FilterProps,
): Promise<CarsProps[]> {
  const { manufacturer, year, fuel, model, limit } = filters;
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1";

  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `${url}/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers },
  );

  return await response.json();
}

export function updateSearchParams(type: string, value: string) {
  const { search, pathname } = window.location;
  const searchParams = new URLSearchParams(search);
  searchParams.set(type, value);
  return `${pathname}?${searchParams.toString()}`;
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarsProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || "",
  );
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${car.year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
