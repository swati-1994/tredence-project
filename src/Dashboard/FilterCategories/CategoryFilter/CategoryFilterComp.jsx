import React, { useEffect, useState } from "react";
import Select from "react-select";
import ProductFilterComp from "./ProductFilter/ProductFilterComp";

const CategoryFilterComp = ({
  category,
  product,
  getAllFilters,
  removeFilters,
  data,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [active, setActive] = useState(false);
  const [word, setWord] = useState(null);
  const [products, setProducts] = useState(null);
  const [defaultVal, setDefaultVal] = useState(null);

  if (selectedOption?.length) {
    setActive(true);
  }

  const dummyData = { value: "no value", label: "no value" };

  useEffect(() => {
    if (removeFilters == true) {
      setSelectedOption(null);
    }
    const filterObj = {
      categoryFilter: selectedOption,
      productFilter: word,
    };

    getAllFilters(filterObj);

    //products filter
    setProducts(data?.filter((x) => x.category === selectedOption?.value));

    //setting default default
    setDefaultVal(!removeFilters ? selectedOption : dummyData);
  }, [selectedOption, active, word, removeFilters]);

  return (
    <div>
      <h4 className="text-left">Select Categories:</h4>
      <div>
        {console.log()}
        <Select
          defaultValue={defaultVal}
          onChange={setSelectedOption}
          options={category}
        />
      </div>
      <div className="my-10" disabled={active}>
        <h4 className="text-left">Select Products:</h4>
        <ProductFilterComp
          changeWord={(word) => setWord(word)}
          products={product}
          category={selectedOption}
          data={products}
        />
      </div>
    </div>
  );
};

export default CategoryFilterComp;
