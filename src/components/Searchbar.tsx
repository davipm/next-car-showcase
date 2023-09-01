"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import SearchManufacturer from "@/components/SearchManufacturer";

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
}

export default function Searchbar() {
  const router = useRouter();
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");

  function updateSearchParams(
    model: string | null,
    manufacturer: string | null,
  ) {
    const searchParams = new URLSearchParams(window.location.search);
    const { pathname } = window.location;

    const updateSearchParam = (key: string, value: string | null) => {
      return value ? searchParams.set(key, value) : searchParams.delete(key);
    };

    updateSearchParam("model", model);
    updateSearchParam("manufacturer", manufacturer);

    const newPathname = `${pathname}?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (manufacture.trim() === "" && model.trim() === "")
      return alert("Please provide some input");
    updateSearchParams(model.toLowerCase(), manufacture.toLowerCase());
  }

  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacture}
          setManufacturer={setManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          id="model"
          placeholder="Tiguan..."
          className="searchbar__input"
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}
