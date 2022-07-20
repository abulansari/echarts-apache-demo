import ReactECharts from 'echarts-for-react';
import "./App.css"
function App() {
  // const options = {
  //   grid: { top: 8, right: 8, bottom: 24, left: 36 },
  //   xAxis: {
  //     type: 'category',
  //     data: ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july  '],
  //   },
  //   yAxis: {
  //     type: 'value',
  //   },
  //   series: [
  //     {
  //       data: [100, 400, 500, 4, 505, 802, 500],
  //       type: 'line',
  //       smooth: true,
  //     },
  //   ],
  //   tooltip: {
  //     trigger: 'axis',
  //   },
  // };

  const options = {
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1, 94.4, 85.4]
      },
      {
        type: 'bar',
        name: '2016',
        data: [95.8, 89.4, 91.2, 76.9]
      },
      {
        type: 'bar',
        name: '2017',
        data: [97.7, 83.1, 92.5, 78.1]
      }
    ]
  };
  return (
    <div className='App'>
      <div className='echarts'>
        <ReactECharts option={options} />
      </div>
    </div>
  );
}

export default App;
