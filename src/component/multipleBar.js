import React, { useState } from 'react'
import ReactECharts from 'echarts-for-react';

const MultipleBar = () => {
  const [data, setData] = useState(['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'])
  const [newData, setNewData] = useState("")

  const [newData2015, setNewData2015] = useState("")
  const [newData2016, setNewData2016] = useState("")
  const [newData2017, setNewData2017] = useState("")
  const [data2015, setData2015] = useState([89.3, 92.1, 90.2, 87.5]);
  const [data2016, setData2016] = useState([95.8, 89.4, 91.2, 76.9]);
  const [data2017, setData2017] = useState([97.7, 83.1, 92.5, 78.1]);

  const options = {
    tooltip: {},
    xAxis: {
      type: 'category',
      data: data,
    },
    yAxis: {},
    series: [{
      type: 'bar',
      name: '2015',
      data: data2015,
    },
    {
      type: 'bar',
      name: '2016',
      data: data2016
    },
    {
      type: 'bar',
      name: '2017',
      data: data2017
    }]
  };

  const addCategory = () => {
  }

  const addData = () => {
    setData([...data, newData])
    setNewData("");

    setData2015([...data2015, newData2015])
    setNewData2015("")
    setData2016([...data2016, newData2016])
    setNewData2016("")
    setData2017([...data2017, newData2017])
    setNewData2017("")
  }
  return (
    <div className='App'>
      <div className='echarts'>
        <h1>Multiple Bar Charts</h1>
        <div className='echarts-multiple'>
          <div>
            <input type="text" value={newData} onChange={(e) => setNewData(e.target.value)} placeholder="Add Category" />
          </div>
          <div>
            <input type="text" value={newData2015} onChange={(e) => setNewData2015(e.target.value)} placeholder="Add New 2015 value" />
            {/* <button onClick={addData} >Add New 2015 value</button> */}
          </div>

          <div>
            <input type="text" value={newData2016} onChange={(e) => setNewData2016(e.target.value)} placeholder="Add New 2016 value" />
            {/* <button onClick={addData} >Add New 2015 value</button> */}
          </div>

          <div>
            <input type="text" value={newData2017} onChange={(e) => setNewData2017(e.target.value)} placeholder="Add New 2017 value" />
          </div>
        </div>
        <div className='echarts-sub'>
          <button onClick={addData} >Add + </button>
        </div>
        <ReactECharts option={options} />
      </div >
    </div>
  );
}
export default MultipleBar