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
import Slider from '../components/Slider';
import { useRef, useState } from 'react';


export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1);
  const sliderRef = useRef(null);

  const sliderSettings = {
    height: 280,
    width: 300,

    size: 3,
    interval: 5000,
    autoplay: true,

    onChange: (_: any, end: number) => {
      setActiveSlide(Math.ceil(++end / 3 ));
    },
  };

  const breakpoints = [
    {
      breakpoint: 1024,
      settings: {
        size: 2,

        onChange: (_: any, end: number) => {
          setActiveSlide(Math.ceil(++end / 2 ));
        },
      }
    },
    {
      breakpoint: 768,
      settings: {
        size: 1,

        onChange: (_: any, end: number) => {
          setActiveSlide(Math.ceil(++end));
        },
      }
    }
  ];

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
          <Slider
            children={[
            (<div>
              <h1>AAAAAAAAAA</h1>
            </div>),
            (<div>
              <h1>BBBBBBBBBB</h1>
            </div>),
            (<div>
              <h1>CCCCCCCCCC</h1>
            </div>),
            (<div>
              <h1>DDDDDDDDDD</h1>
            </div>),
            (<div>
              <h1>EEEEEEEEEE</h1>
            </div>),
            (<div>
              <h1>FFFFFFFFFF</h1>
            </div>),
          ]}
            settings={sliderSettings}
            handler={sliderRef}
            breakpoints={breakpoints}
          />
        </div>
      </main>
      <Footer/>
    </>
  )
}