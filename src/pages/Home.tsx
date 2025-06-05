import {
  Banner,
  Benefit,
  BestSelling,
  BrowserCategory,
  ExploreProducts,
  FlashSales,
  Header,
  HeroSection,
  NewArrival,
} from '../components';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <div style={{display: 'flex', flexDirection: 'column' , gap: '140px'}}>
          <HeroSection/>
          <FlashSales/>
          <BrowserCategory/>
          <BestSelling/>
          <Banner/>
          <ExploreProducts/>
          <NewArrival/>
          <Benefit/>
        </div>
      </main>
      <Footer/>
    </>
  )
}