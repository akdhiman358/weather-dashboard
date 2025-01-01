import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from '@/components/About'
export const metadata = {
  title: "Weather Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <Header />
        {children}
        <About />
        <Footer />
      </body>
    </html>
  );
}
