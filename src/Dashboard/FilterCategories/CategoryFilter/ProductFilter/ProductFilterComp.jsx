import Select from "react-select";
import React, { useEffect, useState } from "react";

const ProductFilterComp = ({ data, products, changeWord }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = formatData(data);

  function formatData(givendata) {
    const requiredArr = [];
    givendata?.map((data) => {
      let obj = {};
      obj.value = data.title;
      obj.label = data.title;
      requiredArr.push(obj);
    });
    return requiredArr;
  }
  useEffect(() => {
    changeWord(selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
      />
    </div>
  );
};

export default ProductFilterComp;
