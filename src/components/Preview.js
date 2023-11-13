import React, { useState, useEffect, useRef } from 'react' 

export default function Preview({ html, css, js, meta}) {
  const [previewContent, setPreviewContent] = useState('') 
  const previewRef = useRef()
  useEffect(() => { 
    // combinig the code as a whole html file
    setPreviewContent(`<html><head>${meta}<style>  ${ css }  </style></head><body>  ${ html }  <script>  ${ js }  </script></body></html>`)
  }, [css, html, js, meta]);  


  return (
    <div className='w-full h-full'>
      <h3 className='font-bold'>Preview</h3>
    <div className='border-2 border-sky-500 w-full h-full p-2'  >
      {/* <div>
        <button  onClick={preview}>Preview</button>
      </div> */}
      <iframe className='w-full h-full' title="preview" ref={previewRef} srcDoc={previewContent} ></iframe>  
    </div>
    </div>
  ) 
  // function preview () {
  //   previewRef.current.setAttribute("srcdoc", previewContent)
  // }
}