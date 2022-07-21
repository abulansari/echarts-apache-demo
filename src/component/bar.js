import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

function Bar() {

  const [arr, setArr] = useState([1500, 2300, 2204, 2100, 1305, 1470, 2600])

  const options = {
    tooltip: {},
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
        type: 'bar'
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
        <h1>Bar Charts</h1>
        <div className='echarts-sub'>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} disabled={arr.length >= 12 ? true : false} />
          <button onClick={addData} disabled={arr.length >= 12 ? true : false}>submit</button>
        </div>
        <ReactECharts option={options} />
      </div>
    </div >
  );
}

export default Bar;
