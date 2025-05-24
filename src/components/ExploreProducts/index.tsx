import './styles.css'
import SectionHeader from "../SectionHeader";
import {exploreProductsData} from "../../mocks";
import ProductThumbnail from "../ProductThumbnail";

export default function ExploreProducts() {
  return (
    <>
      <section className="container exp">
        <div className="header">
          <SectionHeader
            label='Our Products'
            title='Explore Our Products'
          />
        </div>

          <div className="explore-list-products">
            {exploreProductsData.map((sale) => (
              <ProductThumbnail
                imageUrl={sale.image}
                name={sale.title}
                currentPrice={sale.price}
                originalPrice={sale.oldPrice}
                discount={sale.discount}
                rating={sale.rating}
                reviewCount={sale.reviews}
                showAddToCart={false}
                isNewProduct={sale.isNewProduct}
              />
            ))}
          </div>

      </section>
    </>
  )
}