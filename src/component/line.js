import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

function Line() {

  const [arr, setArr] = useState([150, 230, 224, 218, 135, 147, 260])

  const options = {
    legend: {},
    boundaryGap: false,
    xAxis: {
      type: 'category',
      data: ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: arr,
        type: 'line',
        areaStyle: {}
      }
    ]
  };


  const addData = () => {
    setArr([...arr, input])
    setInput("");
  }
  const [input, setInput] = useState("")
  return (
    <div className='App'>
      <div className='echarts'>
        <h1>Line Charts</h1>
        <div className='echarts-sub'>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} disabled={arr.length >= 12 ? true : false} />
          <button onClick={addData} disabled={arr.length >= 12 ? true : false}>submit</button>
        </div>
        <ReactECharts option={options} />
      </div>
    </div >
  );
}

export default Line;
