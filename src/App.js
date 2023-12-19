import { useState } from "react";
import ToDo from "./ToDo";
import "./App.css"


function App() {
  let [value,setValue] = useState("")
  let [record,setRecode] = useState([])
  function change(e){
    setValue(e.target.value)
  }
  function go(){
    setRecode([...record,value])
    setValue("")
  }
  return (
    <div className="App">
      
      <div>
        <input type="text" value={value} onChange={change}></input>
      </div>
      <button onClick={go}>추가</button>
      <ToDo record = {record} setRecode = {setRecode}></ToDo>
    </div>
  );
}

export default App;
