import { useState } from "react";
import Editor from "./Editor";
import Nav from "./Nav";
import Preview from "./Preview" 


function Index() {
  const [codeAndPreview, setCodeAndPreview] = useState(true) 
  const [html, setHtml] = useState('') 
  const [css, setCss] = useState('') 
  const [js, setJs] = useState('') 
  const [meta, setMeta] = useState('') 

  // to pass setState to its child
  const handleHtml = (changedCode) => {
    setHtml(changedCode);
  };
  const handleCss = (changedCode) => {
    setCss(changedCode);
  };
  const handleJs = (changedCode) => {
    setJs(changedCode);
  };
  const handleCodeAndPreview = (view) => {
    setCodeAndPreview(view);
  };

  return ( 
    <>
      {/* { top header section as nav } */}
      <Nav setCodeAndPreview={handleCodeAndPreview} html={html} css={css} js={js} meta={meta} />
      {
        // { to render after clicking create component button}
        codeAndPreview &&

        //  code editors
        <div className="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2"> 
          <div className="flex flex-col gap-3 ">
            {`
              <!DOCTYPE html>
            `}
            <br />
            {`
              <html lang="en">
            `}
            <br />
            {`
              <head>
            `}
            <Editor language="Meta" codes={meta} setCodes={setMeta} />
            {`
              <style>
            `}
            <Editor language="CSS" codes={css} setCodes={handleCss}  />
            {`
              </style>
            `}
            <br />
            {`
              </head>
            `}
            <br />
            {`
              <body>
            `}
            <Editor language="HTML" codes={html} setCodes={handleHtml} />
            {`
              </body>
            `}
            <br />
            <Editor language="JS" codes={js} setCodes={handleJs}  />    
            {`
              </html>
            `}
          </div> 

          {/* preview section */}
          <Preview html={html} css={css} js={js} meta={meta} />
        </div>
      }
    </>
  );
  
}

export default Index;