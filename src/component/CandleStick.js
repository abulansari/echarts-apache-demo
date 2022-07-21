import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

const CandleStick = () => {
  const [newXData, setNewXData] = useState("")
  const [xData, setXData] = useState(['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-27', '2017-10-27'])
  const [newArr, setNewArr] = useState({ arr1: "", arr2: "", arr3: "", arr4: "" })
  const [arr, setArr] = useState([
    [20, 34, 10, 38],
    [40, 35, 30, 50],
    [31, 38, 33, 44],
    [28, 25, 50, 22],
    [20, 45, 50, 10],
    [38, 15, 5, 42]
  ])
  const options = {
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [
      {
        type: 'candlestick',
        data: arr
      }
    ]
  };
  const addData = () => {
    console.log("xData", xData);
    console.log("newXData", newXData);
    setXData([...xData, newXData]);
    setNewXData("")

    console.log("arr", arr);
    console.log("newArr", newArr);
    setArr([...arr, [newArr.arr1, newArr.arr2, newArr.arr3, newArr.arr4]]);
    setNewArr({ arr1: "", arr2: "", arr3: "", arr4: "" })
  }
  return (
    <>
      <div className='App'>
        <div className='echarts'>
          <h1>Candlestick Charts</h1>
          <div className='echarts-multiple'>
            <input type="text" value={newXData} onChange={(e) => setNewXData(e.target.value)} placeholder="add X value " />

            <input type="number" value={newArr.arr1} onChange={(e) => setNewArr({ arr1: e.target.value })} placeholder="add X value " />
            <input type="number" value={newArr.arr2} onChange={(e) => setNewArr({ ...newArr, arr2: e.target.value })} placeholder="add Y value" />
            <input type="number" value={newArr.arr3} onChange={(e) => setNewArr({ ...newArr, arr3: e.target.value })} placeholder="add line start value" />
            <input type="number" value={newArr.arr4} onChange={(e) => setNewArr({ ...newArr, arr4: e.target.value })} placeholder="add line end value" />
            <button onClick={addData} >Add +</button>
          </div>
          <ReactECharts option={options} />
        </div>
      </div>
    </>
  )
}

export default CandleStick