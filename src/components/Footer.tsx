import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div>
        <div>
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
      </div>

      <div>
        <p>@2023 CarHub. All rights reserved</p>
        <div>
          <Link href="/">Privacy & Policy</Link>
          <Link href="/">Privacy & Policy</Link>
        </div>
      </div>
    </footer>
  );
}
