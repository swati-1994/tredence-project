import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = (props) => {
  const [formatData, setFormatData] = useState(null);

  useEffect(() => {
    function formatData() {
      let data = props?.products;
      let arr = [];
      for (let i = 0; i < data?.length; i++) {
        let obj = { name: data[i].title, y: data[i].price };
        arr.push(obj);
      }
      setFormatData(arr);
    }
    formatData();
  }, [props.products]);

  //high chart options
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Products in selected category",
    },
    xAxis: {
      type: "Products",
    },
    yAxis: {
      title: {
        text: "Price of the product",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>',
    },
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: formatData,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartComponent;
