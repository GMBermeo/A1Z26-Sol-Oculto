import s from "styles/Layout.module.scss";
import "styles/globals.scss";
import "styles/_app.scss";
import { Footer } from "./components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={s.body}>
        <div className={s.layout}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
