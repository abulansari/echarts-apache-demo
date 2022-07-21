import { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const Scatter = () => {
  const [newArr, setNewArr] = useState({ arr1: "", arr2: "" })

  const [arr, setArr] = useState([
    [10.0, 8.04],
    [8.07, 6.95],
    [13.0, 7.58],
    [9.05, 8.81],
    [11.0, 8.33],
    [14.0, 7.66],
  ]);

  const options = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: arr,
        type: 'scatter'
      }
    ]
  };
  const addData = () => {
    setArr([...arr, [newArr.arr1, newArr.arr2]])
    setNewArr({ arr1: "", arr2: "" })

  }
  return (<>
    <div className='App'>
      <div className='echarts'>
        <h1>Scatter Charts</h1>
        <div className='echarts-multiple'>
          <input type="number" value={newArr.arr1} onChange={(e) => setNewArr({ arr1: e.target.value })} placeholder="add X value " />
          <input type="number" value={newArr.arr2} onChange={(e) => setNewArr({ ...newArr, arr2: e.target.value })} placeholder="add Y value" />
          <button onClick={addData}>Add Value</button>
        </div>
        <ReactECharts option={options} />
      </div>
    </div>
  </>)
}

export default Scatter