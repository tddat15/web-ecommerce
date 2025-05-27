import './styles.css'
import SectionHeader from "../SectionHeader";
import {flashSaleData} from "../../mocks";
import ProductThumbnail from "../ProductThumbnail";

export default function FlashSales() {
  return (
    <>
      <section className="container flash-sales">
        <div className="header">
          <SectionHeader
            label='Todays'
            title='Flash Sales'
          />
        </div>

        <div className="slider-products">
          <div className="list-products">
            {flashSaleData.map((sale) => (
              <ProductThumbnail
                id={sale.id}
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