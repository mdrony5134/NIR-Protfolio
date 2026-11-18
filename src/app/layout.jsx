import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata = {
  metadataBase: new URL("https://nir-portfolio.vercel.app"),
  title: "Md Nazrul Islam Rony || Software Engineer @ Easy Fashion Ltd",
  description:
    "Md Nazrul Islam Rony - Software Engineer at Easy Fashion Ltd. Full-Stack & Frontend Developer specializing in Next.js, React, TypeScript, and high-performance web systems.",
  keywords: [
    "Md Nazrul Islam Rony",
    "Nazrul Islam Rony",
    "Software Engineer Easy Fashion Ltd",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js Developer Bangladesh",
    "React.js Developer",
    "TypeScript",
    "SM Technology",
    "Easy Fashion",
  ],
  authors: [{ name: "Md Nazrul Islam Rony", url: "https://github.com/mdrony5134" }],
  creator: "Md Nazrul Islam Rony",
  icons: {
    icon: "/me.png",
    shortcut: "/me.png",
    apple: "/me.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nir-portfolio.vercel.app",
    title: "Md Nazrul Islam Rony || Software Engineer @ Easy Fashion Ltd",
    description:
      "Full-Stack & Frontend Software Engineer specializing in scalable Next.js web applications, TypeScript architectures, and payment integrations.",
    siteName: "NIR Portfolio",
    images: [
      {
        url: "/rony-pro.jpg",
        width: 800,
        height: 800,
        alt: "Md Nazrul Islam Rony",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <Header />
          <main className="main-content">
            <div className="container">{children}</div>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
