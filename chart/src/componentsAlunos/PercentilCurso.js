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
       const dataObj = res.data.percentilCurso;
        _nota.push(parseInt(dataObj));



        setChart({
          datasets: [
            {
              label: "Percentil no Curso",
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(225, 225, 40, 1)",
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
  }, []);

  return (

    <table>
      <tbody>
      <tr>
      <td>
      <div className="App">
      <div className="da">
        <HorizontalBar
          data={chart}
          options={{ 
            responsive: true,
            maintainAspectRatio: false, 
            height: '300px', 
            width: "300px", 
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