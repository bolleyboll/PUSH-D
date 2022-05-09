import React from "react";
import ReactApexChart from "react-apexcharts";

class Pie_chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [props.name,4-(props.name-1)],
      options: { colors:['#90EE90','#F44336'],
      labels:['Completed','Yet to complete'],
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

export default Pie_chart;
