import Header from "./components/Header";
import Hero from "./components/Hero";
import SportsMarquee from "./components/SportsMarquee";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="page-shell"
      data-node-id="2:521"
      data-name="1440 x 1024 - Desktop"
    >
      <Header />
      <Hero />
      <SportsMarquee />
      <Footer />
    </div>
  );
}
