import React, { useEffect, useState } from "react";
import CategoryFilterComp from "./CategoryFilter/CategoryFilterComp";

const FilterComponent = (props) => {
  const allData = props?.filterData;
  const [category, setCategory] = useState([]);
  const [product, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    function setPropsdata() {
      let catArr = [];
      let prodArr = [];

      for (let i = 0; i < allData?.length; i++) {
        catArr.push(allData[i].category);
      }

      setCategory([...new Set(catArr)]);
      setProducts([...prodArr]);
    }

    setPropsdata();
  }, [allData]);

  //making an utility function for data formatting on select
  function formatData(givendata) {
    const requiredArr = [];
    givendata.map((data) => {
      let obj = {};
      obj.value = data;
      obj.label = data;
      requiredArr.push(obj);
    });
    return requiredArr;
  }

  const formattedCategory = formatData(category);
  const formattedProduct = formatData(product);

  return (
    <div className="">
      <div className="flex justify-evenly my-4">
        <div>
          <h1 className="text-lg">Filters</h1>
        </div>
        <div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button onClick={() => props.getClearFilter(true)}>Clear</button>
        </div>
      </div>
      <div className="my-10">
        {console.log("i am re rendering sdjkfhjsdhfhjsdfhjdsfhdgfhdg", filter)}
        <CategoryFilterComp
          removeFilters={click}
          getAllFilters={(filter) => setFilter(click ? null : filter)}
          category={formattedCategory}
          product={formattedProduct}
          data={props.filterData}
        />
      </div>

      <div className="my-10">
        <div className=" bottom-0 left-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button
            disabled={filter != null ? false : true}
            onClick={() => props.getAllFilters(filter)}
          >
            Run Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
