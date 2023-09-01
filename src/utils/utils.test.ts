import { handleCarsApi, updateSearchParams } from "@/utils/index";

const mockApiResponse = [
  {
    city_mpg: "",
    class: "",
    combination_mpg: 0,
    cylinders: 0,
    displacement: 0,
    drive: "",
    fuel_type: "",
    highway_mpg: 0,
    make: "",
    model: "",
    transmission: "",
    year: 0,
  },
];

describe("fetchCars", () => {
  beforeEach(() => {
    // Mock the global fetch function before each test
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockApiResponse),
    });
  });

  afterEach(() => {
    // Clear mock implementation and reset fetch
    // global.fetch.mockClear();
  });

  it("calls the API with the correct URL and headers", async () => {
    const filters = {
      manufacturer: "Toyota",
      year: 2023,
      fuel: "Gasoline",
      model: "Corolla",
      limit: 10,
    };

    await handleCarsApi(filters);

    const expectedUrl =
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=Toyota&year=2023&model=Corolla&limit=10&fuel_type=Gasoline";
    const expectedHeaders = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
      headers: expectedHeaders,
    });
  });

  it("returns the correct data from the API response", async () => {
    const filters = {
      manufacturer: "Toyota",
    };
    const result = await handleCarsApi(filters);

    expect(result).toEqual(mockApiResponse);
  });

  // Add more tests for error handling, edge cases, etc.
});

describe("updateSearchParams", () => {
  beforeAll(() => {
    // Mock the window.location object
    Object.defineProperty(window, "location", {
      value: {
        search: "?param1=value1&param2=value2",
        pathname: "/test",
      },
      writable: true,
    });
  });

  it("updates the search params correctly", () => {
    const type = "param1";
    const value = "updatedValue";
    const updatedUrl = updateSearchParams(type, value);
    const expectedUrl = "/test?param1=updatedValue&param2=value2";

    expect(updatedUrl).toEqual(expectedUrl);
  });

  it("adds a new search param when it doesn't exist", () => {
    const type = "newParam";
    const value = "newValue";
    const updatedUrl = updateSearchParams(type, value);
    const expectedUrl = "/test?param1=value1&param2=value2&newParam=newValue";

    expect(updatedUrl).toEqual(expectedUrl);
  });
});
