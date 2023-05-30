import React from "react";
import { categoryTitle } from "../../Data/Categories";
import Pricefilter from "./Price-filter";
import Multirange from "./Multirange";
// import MultiRangeSlider from "./Slider";

type EventsProp = {
    selectedCategories: any;
    onChangeCategory: any
}
const CategoryFilter = (prop: EventsProp) => {
    console.log(categoryTitle)
  return (
    <div>
      <div>
        <h5>Filter</h5>
        <h2>Filters</h2>
        <div>
          <input type="radio" name="" id="" />
          <label htmlFor=""></label>
        </div>
        <div>
          <div>
            <h3>Location</h3>
            <button></button>
          </div>
          <div>
            <div>
              <input type="checkbox" name="" id="Internation" />
              <label htmlFor="Internation">International</label>
            </div>
            <div>
              <input type="checkbox" name="" id="Lagos" />
              <label htmlFor="Lagos">Lagos</label>
            </div>
            <div>
              <input type="checkbox" name="" id="Abuja" />
              <label htmlFor="Abuja">Abuja</label>
            </div>
            <div>
              <input type="checkbox" name="" id="Akure" />
              <label htmlFor="Akure">Akure</label>
            </div>
            <div>
              <input type="checkbox" name="" id="Ibadan" />
              <label htmlFor="Ibadan">Ibadan</label>
            </div>
          </div>
        </div>
        <div>
            <div>
                <h3>Categories</h3>
                <button></button>
            </div>
            {categoryTitle.map(category => (
            <div key={category}>
                <input type="checkbox" checked={prop.selectedCategories.includes(category)} onChange={(e)=>prop.onChangeCategory(category, e.target.checked)} name="" id="" />
                <label htmlFor="">{category}</label>
            </div>

            ))}
           
        </div>
        <div>
            <div>
                <h3>Price</h3>
                <button></button>
            </div>
            <div>
               <Multirange />
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
