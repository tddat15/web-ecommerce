import './styles.css'
import SectionHeader from "../SectionHeader";
import {flashSaleData} from "../../mocks";
import ProductThumbnail from "../ProductThumbnail";

export default function ExploreProducts() {
  return (
    <>
      <section className="flash-sales">
        <div className="header">
          <SectionHeader
            label='Our Products'
            title='Explore Our Products'
          />
        </div>

        <div className="slider-products">
          <div className="list-products">
            {flashSaleData.map((sale) => (
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