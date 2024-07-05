import Link from "next/link";
import Image from "next/image";
import { logoImage } from "../../../public";
import NavLinks from "./navLinks";
import MobileNavbar from "./mobileNav";
import AuthLinks from "./authLinks";

export default function Header() {
  return (
    <nav className="w-[100%] h-[48px] flex items-center justify-between px-5 bg-gray-900 text-white">
      <Link className="flex" href="/">
        <Image
          src={logoImage}
          width={32}
          height={32}
          alt="Jamsow-logo"
          className="rounded-full hover:cursor-pointer"
        />
        <h1 className="ml-2 hover:cursor-pointer">Jamsow</h1>
      </Link>

      <div className="flex items-center">
        <section className="hidden md:flex">
          <NavLinks />
        </section>

        <AuthLinks/>

        <section className="flex md:hidden">
          <MobileNavbar />
        </section>
      </div>
    </nav>
  );
}
