import './styles.css'
import SectionHeader from "../SectionHeader";

export default function NewArrival() {
  return (
    <>
      <section className="flash-sales">
        <div className="header">
          <SectionHeader
            label='Featured'
            title='New Arrival'
          />
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