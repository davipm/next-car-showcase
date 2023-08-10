"use client";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function Hero() {
  function handleScroll() {
    const nextSection = document.getElementById("discover");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            sizes="(max-width: 1200px) 100vw"
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}
