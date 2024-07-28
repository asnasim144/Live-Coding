// import {CodeContext} from "./Index"

export default function NewEditor({ language,codes, setCodes, expandedEditor }) {
  
  return (
    <>
      {
        expandedEditor === language? 
          <div className=""> 
            <div className="">
              <div className=""><b>{language} Editor</b></div>
            </div>
            <div className="">
              {
                language=== "Meta" && <textarea className="w-full border-2 border-gray-500 h-96 " onChange={handleCodeChange} autoFocus={true} >{codes}</textarea>
              }
              {
                language=== "HTML" && <textarea className="w-full border-2 border-orange-600 h-96 " onChange={handleCodeChange} autoFocus={true} >{codes}</textarea>
              }
              {
                language=== "CSS" && <textarea className="w-full border-2 h-96 border-sky-500 " onChange={handleCodeChange} autoFocus={true} >{codes}</textarea>
              }
              {
                language=== "JS" && <textarea className="w-full border-2 border-yellow-500 h-96 " onChange={handleCodeChange} autoFocus={true} >{codes}</textarea>
              }
              {/* <textarea  className={`w-full h-24 border-2  ${language === "HTML" ? 'border-orange-600' : language === "CSS" ? 'border-sky-500' : language === "JS" ? 'border-yellow-500' : language === "Meta" ? 'border-gray-500' :  ""}`} onChange={handleCodeChange} autoFocus={true} >{codes}</textarea> */}
            </div>
          </div>
        : 
        `${codes}`
      }
    </>
  )
  function handleCodeChange(event) {
    
      console.log("🚀 ~ file: NewEditor.js:38 ~ handleCodeChange ~ event.target.value:", event.target.value);
    setCodes(`${event.target.value}`)
  }
}
