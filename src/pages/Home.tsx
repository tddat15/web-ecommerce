import {
  Banner,
  Benefit,
  BestSelling,
  BrowserCategory,
  ExploreProducts,
  FlashSales,
  Header,
  HeroSection,
  NewArrival
} from "../components";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <FlashSales/>
        <BrowserCategory/>
        <BestSelling/>
        <Banner/>
        <ExploreProducts/>
        <NewArrival/>
        <Benefit/>
      </main>
      <Footer/>
    </>
  )
}