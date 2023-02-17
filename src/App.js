import './App.css';
import {useState} from "react";
import {changeValue, checkInputs} from "./Functions/functions";

function App() {
  const [plus,setPlus] = useState([
    {
      id:0,
      value:"",
      changed:false,
    },
  ])
    const [minus,setMinus] = useState([
        {
            id:0,
            value:"",
            changed:false,
        },
    ])

    checkInputs(plus,setPlus)
    checkInputs(minus,setMinus)

  return (
    <div className="App">
        <div className="wrapper">
            <div className="pluses">
                <h2>Pluses</h2>
                {plus?.map((input,i) => {
                    return (
                        <div className="input-block">
                            <input type="text" value={input.value} onChange={(e) => {
                                changeValue(plus,setPlus,i,e)
                            }}/><span>{i+1}</span>
                        </div>
                    )
                })}
            </div>
            <div className="minuses">
                <h2>Minuses</h2>
                {minus?.map((input,i) => {
                    return (
                        <div className="input-block">
                            <input type="text" value={input.value} onChange={(e) => {
                                changeValue(minus,setMinus,i,e)
                            }}/><span>{i+1}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default App;
