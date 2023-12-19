import { useState } from "react";
import "./ToDo.css"

function ToDo({record,setRecode}){
    let [editValue,setEditValue] = useState("")
    let [editIndex,setEditIndex] = useState(null)
    const removeItem = (index)=>{
      let newItem = [...record]
      newItem.splice(index,1)
      setRecode(newItem)
    }
    const change = (e)=>{
      setEditValue(e.target.value)
    }
    const editTodo = (item,index)=>{
      setEditValue(item)
      setEditIndex(index)
    }
    const saveEdit = (index)=>{
      let newItem = [...record]
      newItem[index] = editValue
      setRecode(newItem)
      setEditIndex(null)
    }
    return(
      <div>
        {record.map((item,index) => (
        <div key={index} className="itemFrame">
          {editIndex == index ?(
            <>
            <input type="text" value={editValue} onChange={change}></input>
            <button onClick={()=>saveEdit(index)}>확인</button>
            <button onClick={()=>setEditIndex(null)}>취소</button>
            </>
          ):(
            <>
            <p>{item}</p>
            <button onClick={()=>editTodo(item,index)}>수정</button>
            <button onClick={()=>removeItem(index)}>삭제</button>
          </>
          )}
        </div>
        
        ))}
      </div>
    );
  }

export default ToDo;