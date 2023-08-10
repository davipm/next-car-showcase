import Image from "next/image";
import Link from "next/link";

import CustomButton from "@/components/CustomButton";

export default function Navbar() {
  return (
    <div className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-16 py-4 bg-transparent">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </div>
  );
}
