import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";
import BrowserCategory from "../components/BrowserCategory";
import ExploreProducts from "../components/ExploreProducts";
import NewArrival from "../components/NewArrival";
import Benefit from "../components/Benefit";
import Banner from "../components/Banner";

export default function Home() {
    return (
        <>
            <Header/>

            <main>
                <HeroSection/>
                <FlashSales/>
                <BrowserCategory/>
                <BestSelling/>
                <Banner />
                <ExploreProducts/>
                <NewArrival/>
                <Benefit/>
            </main>

            <Footer/>
        </>
    )
}