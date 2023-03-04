import React, { useState } from 'react'
// import {CodeContext} from "./Index"

export default function Editor({ language, codes, setCodes }) {
  const [code, setCode] = useState('')
  
  return (
    <div className=" handred"> 
      <div className=" ">
        <div className=" "><b>{language} Editor</b></div>
      </div>
      <div className="flex ">
        <textarea  className="form-control editor-textarea" onChange={handleCodeChange} value={code}> </textarea>
      </div>
    </div>
  )
  function handleCodeChange(event) {
    setCode(event.target.value)
    setCodes(event.target.value)
  }
}
