import './styles.css'
import SectionHeader from "../SectionHeader";
import ProductThumbnail from "../ProductThumbnail";
import {bestSellingMock} from "../../mocks/bestSelling.mock";

export default function BestSelling() {
  return (
    <>
      <section className="container">
        <div className="header">
          <SectionHeader
            label='This Month'
            title='Best Selling Products'
          />
        </div>

        <div className="slider-products">
          <div className="list-products">
            {bestSellingMock.map((sale) => (
              <ProductThumbnail
                imageUrl={sale.image}
                name={sale.title}
                currentPrice={sale.price}
                originalPrice={sale.oldPrice}
                discount={sale.discount}
                rating={sale.rating}
                reviewCount={sale.reviews}
                showAddToCart={false}
              />
            ))}
          </div>
        </div>


        <div className="products">

        </div>

        {/*<div className="view-all">*/}
        {/*  <button>View All Products</button>*/}
        {/*</div>*/}
      </section>
    </>
  )
}