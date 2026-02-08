import { useState } from "react";

export function Timer(props){
  const[time, setTime]=useState(props.time)
  function minus(props){
    setTime(time-1)
  }

  function plus(props){
    setTime(time+1)
  }

  function restart(props){
    setTime(0)
  }

  return (
      <div className="card">
        <h2>counter</h2>
        <h2>
          {time}
        </h2>
        <div className="actions">
          <button className="btn" onClick={minus}>-1</button>
          <button className="btn" onClick={plus}>+1</button>
          <button className="btn" onClick={restart}>restart</button>
        </div>
      </div>
    );
}


export function Input({add}){
  const [text, setText] = useState("")
  function save(){
    if (text.trim() === "") return;
    add(text)
    setText("")
  }

  function enterKey(e){
    if (e.key === 'Enter') {
      save()
    }
  }

  return(
    <div>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="請輸入待辦事項..."
        onKeyDown={enterKey}
      />

      <button type="button" onClick={save}>Save</button>

    </div>
  )
}