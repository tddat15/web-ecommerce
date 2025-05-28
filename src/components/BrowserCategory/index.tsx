import './styles.css'
import SectionHeader from "../SectionHeader";
import {browserCategoryData} from "./browserCategory.const";

export default function BrowserCategory() {
  return (
    <>
      <section className="container browser-category">
        <div className="header">
          <SectionHeader
            label='Categories'
            title='Browser By Category'
          />
        </div>

        <div className="list-category">
          {browserCategoryData.map((category, index) => (
            <div className="category-item" key={index}>
              <img src={category.image} alt={category.title}/>
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>


      </section>
    </>
  )
}