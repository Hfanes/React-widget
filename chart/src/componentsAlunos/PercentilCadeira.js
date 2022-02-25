import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import axios from "axios";



const Chart = () =>{
  const [chart, setChart] = useState({});
  const getData =  () => {
    let _nota = [];

     axios
     .get('http://localhost:3001/alunos')
     .then(res => {
       const dataObj = res.data.percentilCadeira;
       _nota.push(parseInt(dataObj));

        setChart({
          datasets: [
            {
              label: "Percentil na UC",
              borderColor: "rgba(0, 111, 174)",
              backgroundColor: "rgba(0, 111, 174)",
              data: _nota
            }
          ]
        });
     })
     .catch(err => {
       console.log(err)
     })
     //console.log(_nota); 
  };

  useEffect(() => {
    getData();
  }, []); //se colocarmos por exemplo  _nota apenas executa se o valor mudar

  return (
    <table>
      <tbody>
      <tr>

      <td>
      <div className="App">
      <div>
        <HorizontalBar
          data={chart}
          options={{ 
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [
                {
                    ticks: {
                        min:0,
                        max:100,
                        stepSize:25
                    } 
                }
            ]
          }
        }}
        />
      </div>
    </div>
      </td>
      </tr>
      </tbody>
    </table>

  );
};
export default Chart;
