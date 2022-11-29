import Link from "next/link";
import Image from "next/image";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Link href="https://www.bermeo.dev" target="_blank">
        <Image
          src="https://www.bermeo.dev/logo-transparent.svg"
          className={s.smallIcon}
          alt="Bermeo Logo"
          width={48}
          height={48}
        />
      </Link>
      <Link href="https://github.com/GMBermeo" target="_blank">
        <Image
          src="/Logo.svg"
          className={s.largeIcon}
          alt="A1Z26 Logo"
          width={128}
          height={128}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/gmbermeo/" target="_blank">
        <Image
          src="/social/linkedin.svg"
          className={s.smallIcon}
          alt="Linkedin Logo"
          width={36}
          height={36}
        />
      </Link>
    </footer>
  );
};
