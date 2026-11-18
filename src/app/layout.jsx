import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata = {
  title: "NIR || Personal Portfolio",
  description:
    "Nazrul Islam Rony - Web Developer & React.js Developer Portfolio",
  icons: {
    icon: "/me.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="up" className="container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
