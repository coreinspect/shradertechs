import { Metadata } from "next";
import Footer from "./components/footer/Footer";
import GoTop from "./components/gotop/GoTop";
import Header from "./components/header/Header";
import Marquee from "./components/marquee/Marquee";
import Edge from "./components/ouredge/Edge";
import Product from "./components/product/Product";
import Team from "./components/teams/Team";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Shrader Technologies",
  description:
    "Affordable Apps with Offshore Development, AI & Social Media Expertise",
};
export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <Header />
      <Marquee />
      <Edge />
      <Product />
      <Team />
      <Footer />
      <GoTop />
    </main>
  );
}
