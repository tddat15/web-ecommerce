import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";
import BrowserCategory from "../components/BrowserCategory";
import ExploreProducts from "../components/ExploreProducts";
import NewArrival from "../components/NewArrival";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <FlashSales/>
      <BestSelling/>
      <BrowserCategory/>
      <h2>Banner</h2>
      <ExploreProducts/>
      <NewArrival/>
      <Footer/>
    </>
  )
}