import React, { useState, useEffect } from "react";
import ChartComponent from "./ChartComponent";
import FilterComponent from "../Dashboard/FilterCategories/FilterComponent";
const DashboardComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allFilters, setAllFilters] = useState(null);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    //getting the list of all the products
    const fetchDataOfProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let productData = await response.json();
        setData(productData.products);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataOfProducts();
  }, [clear]);

  function filterChart(allFilters) {
    setAllFilters(allFilters);

    if (allFilters?.categoryFilter && data.length) {
      let filteredData = data.filter(
        (x) => x.category == allFilters?.categoryFilter?.value
      );
      setData(filteredData);
    }
  }

  function clearAllFilters(clear) {
    setClear(clear);
    setAllFilters(null);
  }

  console.log("allFilters allFilters allFilters", allFilters);
  console.log("clearAllFilters clearAllFilters clearAllFilters", clear);

  return (
    <div className="flex">
      <div className="w-1/4 h-screen border border-indigo-600">
        <FilterComponent
          filterData={data}
          getAllFilters={(allFilters) => filterChart(allFilters)}
          getClearFilter={(clear) => clearAllFilters(clear)}
        />
      </div>
      <div className="w-3/4 float-right">
        <ChartComponent
          products={data}
          loading={loading}
          filterData={allFilters}
        />
      </div>
    </div>
  );
};

export default DashboardComponent;
