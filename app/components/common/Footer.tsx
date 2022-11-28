import Link from "next/link";
import Image from "next/image";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Link href="https://www.bermeo.dev" target="_blank">
        <Image
          src="https://www.bermeo.dev/logo-transparent.svg"
          className="h-16 opacity-10 hover:opacity-100"
          alt="Bermeo Logo"
          width={48}
          height={48}
        />
      </Link>
      <Link href="https://github.com/GMBermeo" target="_blank">
        <Image
          src="/Logo.svg"
          className="h-32"
          alt="A1Z26 Logo"
          width={128}
          height={128}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/gmbermeo/" target="_blank">
        <Image
          src="/social/linkedin.svg"
          className="h-16 opacity-10 hover:opacity-100"
          alt="Linkedin Logo"
          width={36}
          height={36}
        />
      </Link>
    </footer>
  );
};
