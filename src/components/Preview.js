import React, { useState, useEffect, useRef } from 'react' 

export default function Preview({ html, css, js}) {
  const [previewContent, setPreviewContent] = useState('') 
  const previewRef = useRef()
  useEffect(() => { 
    // combinig the code as a whole html file
    setPreviewContent(`<html><head><style>  ${ css }  </style></head><body>  ${ html }  <script>  ${ js }  </script></body></html>`)
  }, [css, html, js]);  


  return (
    <div className='preview'>
      <div>
        <button  onClick={preview}>Preview</button>
      </div>
      <iframe title="preview" ref={previewRef} ></iframe>  
    </div>
  ) 
  function preview () {
    previewRef.current.setAttribute("srcdoc", previewContent)
  }
}