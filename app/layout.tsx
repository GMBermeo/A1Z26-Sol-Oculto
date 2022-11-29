import s from "./MainLayout.module.scss";
import "../styles/globals.scss";
import "../styles/_app.scss";
import { Footer } from "./components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-[100vh] flex-col justify-between">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
