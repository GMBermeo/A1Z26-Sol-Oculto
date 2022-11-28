import s from "./MainLayout.module.scss";
import "../styles/globals.scss";
import "../styles/_app.scss";
import "../styles/ArtDeco.scss";
import { Footer } from "./components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
