// import {CodeContext} from "./Index"

export default function Editor({ language,codes, setCodes }) {
  
  return (
    <div className=""> 
      <div className="">
        <div className=""><b>{language} Editor</b></div>
      </div>
      <div className="">
        <textarea  className={`w-full h-24 border-2  ${language === "HTML" ? 'border-orange-600' : language === "CSS" ? 'border-sky-500' : language === "JS" ? 'border-yellow-500' : language === "Meta" ? 'border-gray-500' :  ""}`} onChange={handleCodeChange}>{codes}</textarea>
      </div>
    </div>
  )
  function handleCodeChange(event) {
    setCodes(event.target.value)
  }
}
