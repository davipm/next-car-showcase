"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/@types";

export default function CustomButton({
  handleClick,
  containerStyles,
  textStyles,
  btnType,
  title,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      data-testid="custom-button"
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
