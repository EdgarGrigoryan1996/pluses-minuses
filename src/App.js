import './App.css';
import {useState} from "react";
import {checkInputs} from "./Functions/functions";
import Input from "./Components/Input";

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
                        <Input value={input.value} list={plus} setList={setPlus} index={i} />
                    )
                })}
            </div>
            <div className="minuses">
                <h2>Minuses</h2>
                {minus?.map((input,i) => {
                    return (
                        <Input value={input.value} list={minus} setList={setMinus} index={i} />
                    )
                })}
            </div>
        </div>
    </div>
  );
}
export default App;
