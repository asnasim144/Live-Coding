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
        <div className="grid grid-cols-1 md:grid-cols-2  mx-10 gap-4"> 
          <div className="flex flex-col gap-3 ">
            <Editor language="Meta" codes={meta} setCodes={setMeta} />
            <Editor language="HTML" codes={html} setCodes={handleHtml} />
            <Editor language="CSS" codes={css} setCodes={handleCss}  />
            <Editor language="JS" codes={js} setCodes={handleJs}  />    
          </div> 

          {/* preview section */}
          <Preview html={html} css={css} js={js} meta={meta} />
        </div>
      }
    </>
  );
  
}

export default Index;