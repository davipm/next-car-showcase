"use client";

// import { useState } from "react";
import { CarsProps } from "@/@types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";

export default function CarCard({ make, model, city_mpg, year }: CarsProps) {
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          /day
        </span>
      </p>

      <div className="relative flex w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl({ make, model, year })}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
